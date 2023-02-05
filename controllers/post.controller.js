const post = require('../models/posts')

async function httpPostGet(req, res, next){
    try{
        const post = await post.findAll()
        res.send(post)
    }catch (e) {
        console.log(`Error fetching all post from table`,  e.message)
        res.status(400).send('Error connecting to db, please contact admin')
    }
}
async function httpGetPostById(req, res, next){
    const id = req.params.id
    try{
        if(!id) throw Error('id is missing')
        const post = await post.findOne({
            where:{
                id: id
            }
        })
        if(!post) throw Error('no post found with that id' )
        return res.status(200).json(post)
    }catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}
async function httpCreatePost(req, res, next){
    try{
        const newPost = await post.create(req.body)
        console.log('New post created : ID = ' + newPost.id)
        return res.status(200).json(newPost)
    }catch (e){
        console.log(e)
        return res.status(400).send( `Could not create new post with params given`)
    }
}
async function httpDeletePost(req, res, next){
    const id = req.params.id
    try{
        if(!id) throw Error({message: 'No id present'})
        const deletedPost =await  post.destroy({
            where:{
                id:id
            }
        })
        res.status(200).json(deletedPost)
    }catch (e) {
        console.log(e.message)
        return res.status(400).json(e.message)
    }
}
async function httpUpdatePost(req, res, next){
    const id = req.params.id
    try{
        if(!id) throw Error({message: 'No id present'})
        await post.update(req.body,{
            where:{
                id: id
            },
        })
        const updatedPost = await post.findOne({
            where:{
                id
            }
        })
        res.status(200).json(updatedPost)
    }catch (e) {
        console.log(e.message)
        res.status(400).end()
    }
}

module.exports= {
    httpPostGet,
    httpGetPostById,
    httpCreatePost,
    httpDeletePost,
    httpUpdatePost
}