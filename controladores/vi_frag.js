'use strict';

class vi_frag {    
    verAbout(req, res) {
        res.render('index', {
            title: 'Acerca de Endemica',
            fragmentos: "comple/about"

        });

    }
    vercontact(req, res) {
        res.render('index', {
            title: 'Contactos de Endemica',
            fragmentos: "comple/contact"

        });

    }
    versingle(req, res) {
        res.render('index', {
            title: 'single de Endemica',
            fragmentos: "comple/single"

        });

    }
    verwork(req, res) {
        res.render('index', {
            title: 'work de Endemica',
            fragmentos: "comple/work"

        });

    }
    verUpload(req, res) {
        res.render('index', {
            title: 'upload de Endemica',
            fragmentos: "comple/uploadPost"

        });

    }

}
module.exports = vi_frag;
