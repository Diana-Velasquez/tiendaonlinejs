const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded({ extended: true });

const app = express();
app.use("/login", express.static("login"));

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "dvelasquez",
    password: "admin123",
    database: 'tiendaonline'
});


connection.connect(function(error) {
    if (error) throw error;
    else console.log("Conexion exitosa");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.post('/login', encoder, function(req, res) {
    var correo = req.body.correo;
    var password = req.body.password;

    connection.query("SELECT * FROM usuarios WHERE correo = ? and password = ?", [correo, password],
        function(error, results, fields) {
            if (results.length > 0) {
                res.redirect("/principal");
            } else {
                res.redirect("/");
            }
            res.end();
        })
});


app.post('/insertArticulo', encoder, function(req, res) {
    var nombre = req.body.nombre;
    var apellido = req.body.apellido;
    var correo = req.body.correo;
    var password = req.body.password;

    connection.query("INSERT INTO usuarios (nombre,apellido,correo,password) VALUES (?, ?, ?, ?)", [nombre, apellido, correo, password],
        function(error, results, fields) {
            if (error) {
                console.error("Error al insertar datos:", error);
                res.redirect("/error");
            } else {
                res.redirect("/");
            }
            res.end();
        });
});

app.get('/listar', function(req, res) {
    connection.query("SELECT * FROM articulos", function(error, results, fields) {
        if (error) {
            console.error("Error al listar:", error);
            res.status(500).json({ error: 'Error al listar los articulos' });
        } else {
            res.json(results);
            console.log(results);
        }
    });
});


app.post('/insertArticulo', encoder, function(req, res) {
    var id = req.body.id;
    var nombrearticulo = req.body.nombrearticulo;
    var marca = req.body.marca;
    var descripcion = req.body.descripcion;

    connection.query("INSERT INTO articulos (id, nombrearticulo, marca, descripcion) VALUES (?, ?, ?, ?)", [id, nombrearticulo, marca, descripcion],
        function(error, results, fields) {
            if (error) {
                console.error("Error al insertar el valor:", error);
                res.redirect("/error");
            } else {
                res.redirect("/principal");
            }
            res.end();
        });
});


app.post('/updateArticulo', encoder, function(req, res) {
    var id = req.body.id;
    var nombrearticulo = req.body.nombrearticulo;
    var marca = req.body.marca;
    var descripcion = req.body.descripcion;

    connection.query("UPDATE articulos SET nombrearticulo = ?, marca = ?, descripcion = ? WHERE id = ?", [nombrearticulo, marca, descripcion, id],
        function(error, results, fields) {
            if (error) {
                console.error("Error al actualizar el valor:", error);
                res.redirect("/error");
            } else {
                res.redirect("/");
            }
            res.end();
        });
});

app.post('/deleteArticulo', encoder, function(req, res) {
    var id = req.body.id;

    connection.query("DELETE FROM articulos WHERE id = ?", [id],
        function(error, results, fields) {
            if (error) {
                console.error("Error al eliminar:", error);
                res.redirect("/error");
            } else {
                res.redirect("/");
            }
            res.end();
        });
});


app.get("/principal", function(req, res) {
    res.sendFile(__dirname + '/principal.html');
});



// set app port
app.listen(5500);