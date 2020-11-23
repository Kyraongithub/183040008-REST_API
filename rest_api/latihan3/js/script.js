function tampilkanSemuaMenu(){
    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        $.each(menu, function(i, data){
            let isiMenu = '<div class="col-md-4"><div class="card mb-"><img src="img/pizza/' +data.gambar+'"class="card-img-top"><div class="card-body"><h5 class="card-title">'+data.nama+'</h5><p class="card-text">'+data.deskripsi+'</p><h5 class="card-title">'+data.harga+'</h5><a href="#" class="btn btn-primary">Order!</a></div></div></div>';
            
            $('#daftar-menu').append(isiMenu);
        });
    });
}

tampilkanSemuaMenu();