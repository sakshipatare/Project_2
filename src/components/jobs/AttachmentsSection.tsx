import React from 'react';
import { Paperclip, X } from 'lucide-react';

interface AttachmentsSectionProps {
  documents: File[];
  onChange: (documents: File[]) => void;
}

export default function AttachmentsSection({ documents, onChange }: AttachmentsSectionProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    onChange([...documents, ...files]);
  };

  const removeDocument = (index: number) => {
    onChange(documents.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Optional Attachments</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-gray-400 rounded-lg border-2 border-dashed cursor-pointer hover:bg-gray-50">
            <Paperclip className="h-8 w-8" />
            <span className="mt-2 text-sm">Upload supporting documents</span>
            <input type="file" className="hidden" multiple onChange={handleFileChange} />
          </label>
        </div>

        {documents.length > 0 && (
          <ul className="divide-y divide-gray-200">
            {documents.map((file, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Paperclip className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-900">{file.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeDocument(index)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}