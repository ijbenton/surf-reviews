import React from 'react';

const DimensionsTable = ({ dimensions }) => {
  return (
    <table className='pt-3'>
      <thead>
        <tr>
          <th className='border border-black py-2'>Height</th>
          <th className='border border-black py-2'>Width</th>
          <th className='border border-black py-2'>Thickness</th>
          <th className='border border-black py-2'>Volume</th>
        </tr>
      </thead>
      <tbody>
        {dimensions.map((dim, idx) => (
          <tr key={idx}>
            <td className='border border-black py-2 text-center'>
              {dim.height}
            </td>
            <td className='border border-black py-2 text-center'>
              {dim.width}
            </td>
            <td className='border border-black py-2 text-center'>
              {dim.thickness}
            </td>
            <td className='border border-black py-2 text-center'>
              {dim.volume}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DimensionsTable;
