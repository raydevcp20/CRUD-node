const express = require('express');
const app = express();


require('marko/node-require');
var markoExpress = require('marko/express');
app.use(markoExpress());


const AlunoDao = require('./DAO/aluno-dao');
const dao = new AlunoDao();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())


const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret:'nerdsfornerds',
    saveUninitialized:true,
    resave:true
}));
app.use(flash());


app.get('/', function(req, res){

    let response = {
        error_messages: req.flash('error'),
        success_messages: req.flash('success'),
        results: []
    }

    dao.list().then( (results)=>{
        response.results = results;
        res.marko(require('./templates/alunos.marko'),response);
    }).catch( (err)=>{
        console.log("Ocorreu um erro");
        response.error_messages.push('Ocorreu um erro no servidor');
        res.marko(require('./templates/alunos.marko'), response);
    })
});

app.get('/form', function(req, res){
    res.marko(require('./templates/form.marko'));
});

app.get('/form/:id', function(req, res){
    dao.findById(req.params.id).then( (result)=>{
        if(result.length > 0){
            aluno = result[0];
            req.flash('success', 'Aluno  '+ req.params.nome+ ' atualizado com sucesso.')
            res.marko(require('./templates/form.marko'), aluno);
        }else{
            req.flash('error', 'Aluno de id  '+ req.params.id+ ' não foi encontrado.');
            res.redirect('/');
        }
    }).catch( (err)=>{
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao buscar aluno de id '+ req.params.id);
        res.redirect('/');
    });
});

app.get('/alunos/delete/:id', function(req, res){
    dao.delete(req.params.id).then( (result)=>{
        req.flash('success', 'Aluno removido com sucesso.')
        res.redirect('/');
    }).catch( (err)=>{
        console.log(err);
        req.flash('error', 'Ocorreu um erro ao apagar os dados do aluno '+aluno.nome)
        res.redirect('/');
    });
});

app.post('/alunos', function(req, res){
    if(req.body.id){
        dao.update(req.body).then( (result)=>{
            req.flash('success', 'Aluno atualizado com sucesso.')
            res.redirect('/');
        }).catch( (err)=>{
            console.log(err);
            req.flash('error', 'Ocorreu um erro ao atualizar os dados do aluno '+aluno.nome)
            res.redirect('/');
        });
    }else{
        dao.save(req.body).then( (result)=>{
            req.flash('success', 'Aluno salvo com sucesso.')
            res.redirect('/');
        }).catch( (err)=>{
            console.log(err);
            req.flash('error', 'Ocorreu um erro ao salvar os dados do aluno.')
            res.redirect('/');
        });
    }
});

app.listen(3333, '0.0.0.0', function(){
    console.log('Conectado.');
});
