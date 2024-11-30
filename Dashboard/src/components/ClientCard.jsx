/* eslint-disable react/prop-types */

export const ClientCard = ({client}) => {
  return (
	<div className="p-6 bg-white rounded-xl space-y-5">
    <div>
      <h1 className="text-xl font-semibold">{client.name}</h1>
      <p className="text-sm text-gray-400">{client.title}</p>
    </div>
    <p className="text-xs text-gray-300">{client.Date}</p>
  </div>
  )
}
