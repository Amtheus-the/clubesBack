const { request, response } = require('express')
const Annotations = require ('../models/AnnotatiosData')

module.exports = {

   async read(request, response){
       const annotationsList = await Annotations.find();

       return response.json(annotationsList);
    },

     async create(request, response){
        const { title, notes, priority } = request.body;

        if(!notes || !title){
            return response.status(404).json({ error: "Necessario um titulo/anotação!"})
        }

        const annotationsCreated = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationsCreated);

    },

   async delete(request, response){
        const { id } = request.params;

        const annotationsDeleted = await Annotations.findOneAndDelete({ _id : id })

        if (annotationsDeleted){
            return response.json(annotationsDeleted);
        }

        return response.status(401).json({ error: "Não foi encontrado o registro para deletar!"});

    }

}