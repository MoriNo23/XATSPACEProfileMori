export function AboutMeTable({ config, data }) {
  return (
    <table className="text-1">
      <thead>
        <tr>
          <td colSpan={2}>
            <img src={data.header} alt="" className="object-contain" />
          </td>
        </tr>
      </thead>
      <tbody>
        {Object.entries(config).map(([pregunta, respuesta]) => (
          <tr pregunta={pregunta} className="h-10">
            <th className="bg-neutral-800 w-2.5 ">{respuesta}:</th>
            <td className="text-[clamp(0.5rem,1vw,1rem)] pl-2">
              {data[pregunta]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
