import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

const Form = () => {


    const [datos, setDatos] = useState({
        name: '',
        email: '',
        celular: '',
        edad: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.celular]: event.target.value,
            [event.target.edad]: event.target.value

        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        axios.post('api/form/create', {
            name: datos.name,
            email: datos.email,
            celular: datos.celular,
            edad: datos.edad
        }).then(function (response) {
            if (response.data.status === 200) {
                Lightbox(response.data.msg)
                document.getElementById("form-data").reset();
            }
            if (response.data.status === 400) {
                var json = response.data.msg
                for (var clave in json) {
                    if (json.hasOwnProperty(clave)) {
                        alert(json[clave]);
                    }
                }
            }
        }).catch(function (error) {
            alert('error');
        });
    }


    return (
        <Fragment>
            <h1>Formulario</h1>

            <form onSubmit={enviarDatos} id="form-data">
                <div className="row">
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="name"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" placeholder="Email" className="form-control" onChange={handleInputChange} name="email"></input>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Celular</label>
                        <input type="numbert" placeholder="celular" className="form-control" onChange={handleInputChange} name="celular"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Edad</label>
                        <input type="numbert" placeholder="Edad" className="form-control" onChange={handleInputChange} name="edad"></input>
                    </div>
                </div>
                <input type="submit" value="Guardar" className="btn btn-primary"/>
            </form>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" id="close">&times;</span>
                    <p id="modal-msm"></p>
                </div>

            </div>

        </Fragment>
    );
}

export default Form;

if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}

var modal = document.getElementById("myModal");


function Lightbox(params) {
    modal.style.display = "block";
    document.getElementById("modal-msm").innerHTML = params
    fadeout()
}

function fadeout() {
    var fadeTarget = modal
    fadeTarget.style.opacity = ''
    var fadeEffect = setInterval(function () {
        console.log(fadeTarget.style.opacity)
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
        }
        if (fadeTarget.style.opacity == 0) {
            clearInterval(fadeEffect);
            closeTime()
        }
    }, 200);
}

function closeTime(params) {
    modal.style.display = "none";
}

var close = document.getElementById("close");
close.onclick = function () {
    modal.style.display = "none";
}





