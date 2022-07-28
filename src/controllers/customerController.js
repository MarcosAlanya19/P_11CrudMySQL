const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer', (err, customers)=>{
            if(err){
                res.json(err);
            }
            res.render('customers',{
                data: customers
            });
        });
    });
};


// Impresion HTML
controller.save = (req, res) =>{
    const data = req.body;
    // Coneccion con MySQL
    req.getConnection((err,conn)=>{
        conn.query('insert into customer set ?',[data], (err,customer)=>{
            res.redirect('/');
        })
    })
};

// Update
controller.edit = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
        res.render('customers_edit', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? where id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

// Delete
controller.delete = (req, res) =>{
    const id =req.params.id;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?',[id],(err,customer)=>{
            res.redirect('/');
        })
    })
};

module.exports = controller;