import React from 'react';

function Stories(props) {
    return (
        <div className="bg-white ml-3 mr-6 rounded-md">
            <h2 className="py-4 px-6 opacity-80 border-b text-xl">Stories</h2>
            <div>
                <div className="flex items-center px-3 py-3">
                    <div className="h-14 w-14 rounded-full border-2 border-gray-200 flex items-center justify-center">
                        <p className="text-xl opacity-40">+</p>
                    </div>
                    <div className="ml-4">
                        <h2 className="opacity-80 font-medium">Create Your Story</h2>
                        <p className="text-sm opacity-40">time to story</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stories;