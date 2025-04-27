
import React, { useState } from 'react';
import { Button } from './ui/button';
import { FileImage, FileVideo, FileAudio, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LiveDemo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast({
      title: "File selected",
      description: `${file.name} is ready for analysis.`,
      duration: 3000,
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleAnalyze = () => {
    toast({
      title: "Analysis started",
      description: "This is a demo. In a real implementation, we would analyze your file.",
      duration: 5000,
    });
  };

  const sampleFiles = [
    { type: "image", icon: <FileImage className="h-5 w-5" />, name: "Sample Image" },
    { type: "video", icon: <FileVideo className="h-5 w-5" />, name: "Sample Video" },
    { type: "audio", icon: <FileAudio className="h-5 w-5" />, name: "Sample Audio" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sc-dark-blue/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Live Demo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience Soulcloude's detection capabilities. Upload your file or try one of our samples.
          </p>
        </div>

        {/* Upload Area */}
        <div 
          className={`glass-card p-8 rounded-xl border-2 border-dashed transition-all duration-300
            ${isDragging ? 'border-sc-blue bg-sc-blue/10' : 'border-gray-700'} 
            ${selectedFile ? 'neon-border' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <Upload className="h-12 w-12 text-sc-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              {selectedFile ? selectedFile.name : "Drop your file here"}
            </h3>
            <p className="text-gray-400 mb-6">
              {selectedFile 
                ? `File size: ${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` 
                : "or select a file from your computer"}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="bg-sc-blue/20 hover:bg-sc-blue/30 text-sc-blue px-6 py-3 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105">
                  <Upload className="h-5 w-5 mr-2" />
                  Browse Files
                </div>
                <input 
                  id="file-upload" 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileInputChange} 
                  accept="image/*,video/*,audio/*" 
                />
              </label>
              
              {selectedFile && (
                <Button 
                  onClick={handleAnalyze}
                  className="bg-sc-blue text-black hover:bg-sc-blue/80 transition-all duration-200 hover:scale-105"
                >
                  Analyze Now
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <p className="text-sm text-gray-400 w-full mb-2">Or try a sample:</p>
              {sampleFiles.map((file, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-700/50"
                  onClick={() => {
                    toast({
                      title: "Sample selected",
                      description: `${file.name} is ready for analysis.`,
                      duration: 3000,
                    });
                  }}
                >
                  {file.icon}
                  <span className="ml-2">{file.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
