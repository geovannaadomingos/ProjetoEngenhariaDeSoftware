import { useState } from 'react';
import './AddMaterialModal.css';

function AddMaterialModal({ onClose, onAddMaterial, email }) {
    const [materialInfo, setMaterialInfo] = useState({
        titulo: '',
        file: null,
        autor: email ? email : '',
        assunto: '',
        periodo: '',
        professor: '',
        codigoDisciplina: '',
        curso: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMaterialInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setMaterialInfo((prevInfo) => ({
            ...prevInfo,
            file: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', materialInfo.file);
        formData.append('titulo', materialInfo.titulo);
        formData.append('autor', materialInfo.autor);
        formData.append('assunto', materialInfo.assunto);
        formData.append('periodo', materialInfo.periodo);
        formData.append('professor', materialInfo.professor);
        formData.append('codigoDisciplina', materialInfo.codigoDisciplina);
        formData.append('curso', materialInfo.curso);
        onAddMaterial(formData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Adicionar Material</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <label>
                        Título do Material:
                        <input
                            type="text"
                            name="titulo"
                            value={materialInfo.titulo}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <label>
                        Anexar arquivo:
                        <input type="file" onChange={handleFileChange} accept=".pdf, .doc, .docx, .png, .svg, .jpeg, .jpg" className="input-field" required />
                    </label>
                    <label>
                        Autor:
                        {materialInfo.autor ? (
                            ` ${materialInfo.autor}`
                        ) : (
                            <input
                                type="text"
                                name="autor"
                                value={materialInfo.autor}
                                onChange={handleInputChange}
                                className="input-field"
                                required
                            />
                        )}
                    </label>
                    <label>
                        Assunto:
                        <input
                            type="text"
                            name="assunto"
                            value={materialInfo.assunto}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <label>
                        Período:
                        <input
                            type="text"
                            name="periodo"
                            value={materialInfo.periodo}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <label>
                        Professor:
                        <input
                            type="text"
                            name="professor"
                            value={materialInfo.professor}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <label>
                        Código da Disciplina:
                        <input
                            type="text"
                            name="codigoDisciplina"
                            value={materialInfo.codigoDisciplina}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <label>
                        Curso:
                        <input
                            type="text"
                            name="curso"
                            value={materialInfo.curso}
                            onChange={handleInputChange}
                            className="input-field"
                            required
                        />
                    </label>
                    <button type="submit" className="btn-submit">Adicionar</button>
                    <button onClick={onClose} className="btn-cancel">Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default AddMaterialModal;
