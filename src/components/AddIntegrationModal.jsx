import { useState } from "react"

function AddIntegrationModal({ onClose, onAdd }) {
  const [name, setName] = useState("")
  const [sourceApp, setSourceApp] = useState("")
  const [targetApp, setTargetApp] = useState("")

  const handleSubmit = () => {
    if (!name || !sourceApp || !targetApp) return

    onAdd({
      name,
      sourceApp,
      targetApp
    })

    onClose()
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Integration</h3>

        <input
          placeholder="Integration Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Source Application"
          value={sourceApp}
          onChange={(e) => setSourceApp(e.target.value)}
        />

        <input
          placeholder="Target Application"
          value={targetApp}
          onChange={(e) => setTargetApp(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>Create</button>
        </div>
      </div>
    </div>
  )
}

export default AddIntegrationModal
