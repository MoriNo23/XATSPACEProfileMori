export function AboutMeTable({ config, data }) {
  return (
    <table className="text-[50%] text-nowrap">
      <thead>
        <tr>
          <td colSpan={2}>
            <img src={data.header} alt="" className="object-contain" />
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(config).map(([pregunta, respuesta]) => (
          <tr pregunta={pregunta}>
            <th className="w-10 p-[3px_1em]">{respuesta}:</th>
            <td>{data[pregunta]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
