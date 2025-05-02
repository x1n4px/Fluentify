export const CorrectionView = ({ originalText, correctedText, corrections }) => {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Texto original</h3>
            <p className="whitespace-pre-wrap bg-gray-50 p-3 rounded">{originalText}</p>
          </div>
          <div className="p-4 border border-green-200 rounded-lg bg-green-50">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Texto corregido</h3>
            <p className="whitespace-pre-wrap bg-white p-3 rounded">{correctedText}</p>
          </div>
        </div>
        
        {corrections.length > 0 && (
          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">Correcciones y sugerencias</h3>
            <ul className="space-y-2">
              {corrections.map((correction, index) => (
                <li key={index} className="p-3 bg-white rounded border-l-4 border-blue-500">
                  {correction}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };