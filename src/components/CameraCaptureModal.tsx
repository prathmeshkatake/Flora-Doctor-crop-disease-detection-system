import React, { useRef, useState, useEffect } from "react";
import { Camera, RefreshCw, X, AlertCircle, Check, Sparkles, Upload, Image as ImageIcon } from "lucide-react";
import { compressImage } from "../utils/imageUtils";

interface CameraCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (base64Image: string) => void;
}

export const CameraCaptureModal: React.FC<CameraCaptureModalProps> = ({
  isOpen,
  onClose,
  onCapture,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nativeCameraInputRef = useRef<HTMLInputElement | null>(null);
  const nativeGalleryInputRef = useRef<HTMLInputElement | null>(null);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraFacing, setCameraFacing] = useState<"environment" | "user">("environment");
  const [error, setError] = useState<string | null>(null);
  const [capturedPreview, setCapturedPreview] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      setCapturedPreview(null);
      return;
    }

    startCamera(cameraFacing);

    return () => {
      stopCamera();
    };
  }, [isOpen, cameraFacing]);

  const startCamera = async (facing: "environment" | "user") => {
    setIsInitializing(true);
    setError(null);
    stopCamera();

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setError("Direct live video streaming is not supported in this browser mode. You can snap a photo with your device camera below.");
      setIsInitializing(false);
      return;
    }

    try {
      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: facing,
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      };

      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
      }
    } catch (err: any) {
      // Check if permission was dismissed or denied
      const isPermissionIssue =
        err?.name === "NotAllowedError" ||
        err?.name === "PermissionDeniedError" ||
        String(err?.message || "").toLowerCase().includes("permission") ||
        String(err?.message || "").toLowerCase().includes("dismissed");

      if (isPermissionIssue) {
        setError("Camera permission was dismissed or blocked. You can retry with permission or take a photo directly using your device camera below.");
      } else {
        // Try fallback without strict facingMode
        try {
          const fallbackStream = await navigator.mediaDevices.getUserMedia({ video: true });
          setStream(fallbackStream);
          if (videoRef.current) {
            videoRef.current.srcObject = fallbackStream;
            await videoRef.current.play();
          }
          setError(null);
        } catch {
          setError("Live camera stream is unavailable. Please click below to capture with your device camera or upload a leaf photo.");
        }
      }
    } finally {
      setIsInitializing(false);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleCameraFacing = () => {
    setCameraFacing((prev) => (prev === "environment" ? "user" : "environment"));
  };

  const takeSnapshot = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    let vw = video.videoWidth || 1280;
    let vh = video.videoHeight || 720;
    const maxDim = 800;
    if (vw > maxDim || vh > maxDim) {
      if (vw > vh) {
        vh = Math.round((vh * maxDim) / vw);
        vw = maxDim;
      } else {
        vw = Math.round((vw * maxDim) / vh);
        vh = maxDim;
      }
    }
    const canvas = canvasRef.current || document.createElement("canvas");
    canvas.width = vw;
    canvas.height = vh;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(video, 0, 0, vw, vh);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.78);
    setCapturedPreview(dataUrl);
  };

  const handleNativeFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const compressed = await compressImage(file, 800, 800, 0.78);
      setCapturedPreview(compressed);
      setError(null);
    } catch {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCapturedPreview(event.target.result as string);
          setError(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const confirmCapture = () => {
    if (capturedPreview) {
      onCapture(capturedPreview);
      onClose();
    }
  };

  const retakeSnapshot = () => {
    setCapturedPreview(null);
    if (!stream && !error) {
      startCamera(cameraFacing);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="camera-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        id="camera-modal-card"
        className="bg-slate-900 text-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white">Leaf Camera Scanner</h3>
              <p className="text-[11px] text-slate-400">Position the leaf under good lighting for precise AI diagnosis</p>
            </div>
          </div>
          <button
            id="close-camera-modal"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewfinder / Fallback View */}
        <div className="relative bg-black flex-1 min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
          {error && !capturedPreview ? (
            <div className="p-6 text-center max-w-md space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white mb-1">Camera Stream Notice</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{error}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => nativeCameraInputRef.current?.click()}
                  className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold inline-flex items-center justify-center space-x-2 shadow-xs transition-colors"
                >
                  <Camera className="w-4 h-4" />
                  <span>Snap with Device Camera</span>
                </button>

                <button
                  type="button"
                  onClick={() => nativeGalleryInputRef.current?.click()}
                  className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold inline-flex items-center justify-center space-x-2 border border-slate-700 transition-colors"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Pick from Photos</span>
                </button>

                <button
                  type="button"
                  onClick={() => startCamera(cameraFacing)}
                  className="w-full sm:w-auto px-3 py-2.5 text-xs text-slate-400 hover:text-white inline-flex items-center justify-center space-x-1 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry</span>
                </button>
              </div>

              {/* Hidden file inputs with capture="environment" for instant mobile camera trigger */}
              <input
                ref={nativeCameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleNativeFileInput}
              />
              <input
                ref={nativeGalleryInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleNativeFileInput}
              />
            </div>
          ) : capturedPreview ? (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <img
                src={capturedPreview}
                alt="Captured leaf preview"
                className="max-h-[400px] w-full object-contain rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center space-x-1">
                <Check className="w-3.5 h-3.5" />
                <span>Leaf Snapshot Ready</span>
              </div>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full max-h-[420px] object-cover"
              />

              {/* Viewfinder Guideline Overlay */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-8">
                <div className="w-64 h-64 sm:w-80 sm:h-80 border-2 border-dashed border-emerald-400/80 rounded-2xl relative shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]">
                  {/* Corner Targets */}
                  <div className="absolute -top-1 -left-1 w-5 h-5 border-t-4 border-l-4 border-emerald-400 rounded-tl-sm" />
                  <div className="absolute -top-1 -right-1 w-5 h-5 border-t-4 border-r-4 border-emerald-400 rounded-tr-sm" />
                  <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-4 border-l-4 border-emerald-400 rounded-bl-sm" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-4 border-r-4 border-emerald-400 rounded-br-sm" />

                  <div className="absolute bottom-3 inset-x-0 text-center">
                    <span className="text-[11px] bg-slate-900/80 backdrop-blur-xs text-emerald-300 font-medium px-3 py-1 rounded-full border border-emerald-500/30">
                      Center Leaf & Symptoms Here
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Hidden Canvas for capture rendering */}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Action Controls Footer */}
        <div className="px-5 py-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          {!capturedPreview ? (
            <>
              <button
                type="button"
                onClick={toggleCameraFacing}
                disabled={Boolean(error)}
                className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition-colors border border-slate-700"
                title="Switch between front and rear cameras"
              >
                <RefreshCw className="w-4 h-4" />
                <span className="hidden sm:inline">Flip Camera</span>
              </button>

              <button
                id="take-snapshot-btn"
                type="button"
                onClick={takeSnapshot}
                disabled={Boolean(error) || isInitializing}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-full shadow-xs flex items-center space-x-2 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              >
                <Camera className="w-4 h-4" />
                <span>Capture Leaf Photo</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-slate-400 hover:text-white px-3 py-2 transition-colors"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={retakeSnapshot}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl flex items-center space-x-1.5 transition-colors border border-slate-700"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Photo</span>
              </button>

              <button
                id="analyze-snapshot-btn"
                type="button"
                onClick={confirmCapture}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs flex items-center space-x-2 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-emerald-100" />
                <span>Analyze with AI Doctor</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

