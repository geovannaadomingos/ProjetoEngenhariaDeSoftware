function AddMaterialModal({ onClose }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Adicionar Material</h2>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

export default AddMaterialModal;