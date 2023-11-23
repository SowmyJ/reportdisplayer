const Table = ({tableName,columns, data }) => (
    <div>
      <h2>{tableName}</h2>
      <table>
        <thead>
          <tr>
            {columns?.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              {columns?.map(column => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default Table