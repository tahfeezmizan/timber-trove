import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className="mb-16 text-center">
            <h2 className="text-3xl font-MochiyPopOne capitalize pb-5">{title}</h2>
            <p className="w-20 mx-auto rounded-3xl border-b-4 border-[#F56E07]"></p>
        </div>
    );
};

export default SectionTitle;
