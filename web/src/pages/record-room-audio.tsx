import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Navigate, useParams } from "react-router-dom";

const isRecordingSupported = !!navigator.mediaDevices && 
    typeof navigator.mediaDevices.getUserMedia === 'function' &&
    typeof window.MediaRecorder === 'function'

type RoomParams = {
    roomId: string
}

export function RecordRoomAudio() {
    const params = useParams<RoomParams>()

    const [isRecording, setIsRecording] = useState(false)
    const recorder = useRef<MediaRecorder | null>(null)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    
    function stopRecording() {
        setIsRecording(false)
        
        if (recorder.current && recorder.current.state !== 'inactive') {
            recorder.current.stop()
        }    

        if(intervalRef.current) {
            clearInterval(intervalRef.current)
        }
    }
    
    async function uploadAudio(audio: Blob) {
        const formData = new FormData()

        formData.append('file', audio, 'audio.webm')

        const response = await fetch(`http://localhost:3333/rooms/${params.roomId}/audio`, {
            method: 'POST',
            body: formData,
        })

        const result = await response.json()
        console.log(result)
    }

    function createRecorder(audio: MediaStream) {
        recorder.current = new MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 64_000,
        })

        recorder.current.ondataavailable = event => {
            if (event.data.size > 0) {
                uploadAudio(event.data)
            }
        }

        recorder.current.onstart = () => {
            console.log('Iniciando gravação')
        }

        recorder.current.onstop = () => {
            console.log('Parando gravação')
        }

        recorder.current.start()   
    }

    async function startRecording() {
        if (!isRecordingSupported) {
            alert('O seu navegador não suporta gravação de áudio')
            return
        }

        setIsRecording(true)

        const audio = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44_100,
            },
        })
        
        createRecorder(audio)

        intervalRef.current = setInterval(() => {
            recorder.current?.stop()

            createRecorder(audio)
        }, 5000)
    }

    if (!params.roomId) {
        return <Navigate to="/" />
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-3">
            {isRecording 
                ? <Button onClick={stopRecording}>Parar gravação</Button>
                : <Button onClick={startRecording}>Gravar áudio</Button>
            }
            {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
        </div>
    )
}