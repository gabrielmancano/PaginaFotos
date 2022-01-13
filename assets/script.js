jQuery(function () {
    
    box = $("#box-image-escondido");
    img_box = $("#img-box")
    
    img1 = $("#img1");
    img2 = $("#img2");
    img3 = $("#img3");
    img4 = $("#img4");
    img5 = $("#img5");
    img6 = $("#img6");
    img7 = $("#img7");
    img8 = $("#img8");
    img9 = $("#img9");
    img10 = $("#img10");
    img11 = $("#img11");
    img12 = $("#img12");
    img13 = $("#img13");
    img14 = $("#img14");
    img15 = $("#img15");
    img16 = $("#img16");
    

    box.hide();
    img_box.hide();

    img1.click( () => { 
       img_box.attr("src", "./assets/media/foto1.jpg");
       mostrar();
    });

    img2.click( () => { 
        img_box.attr("src", "./assets/media/foto2.jpg");
        mostrar();
     });

     img3.click( () => { 
        img_box.attr("src", "./assets/media/foto3.jpg");
        mostrar();
     });

     img4.click( () => { 
        img_box.attr("src", "./assets/media/foto4.jpg");
        mostrar();
     });

     img5.click( () => { 
        img_box.attr("src", "./assets/media/foto5.jpg");
        mostrar();
     });

     img6.click( () => { 
        img_box.attr("src", "./assets/media/foto6.jpg");
        mostrar();
     });

     img7.click( () => { 
        img_box.attr("src", "./assets/media/foto7.jpg");
        mostrar();
     });

     img8.click( () => { 
        img_box.attr("src", "./assets/media/foto8.jpg");
        mostrar();
     });

     img9.click( () => { 
        img_box.attr("src", "./assets/media/foto9.jpg");
        mostrar();
     });

     img10.click( () => { 
        img_box.attr("src", "./assets/media/foto10.jpg");
        mostrar();
     });

     img11.click( () => { 
        img_box.attr("src", "./assets/media/foto11.jpg");
        mostrar();
     });

     img12.click( () => { 
        img_box.attr("src", "./assets/media/foto12.jpg");
        mostrar();
     });

    box.click(function () {
        box.hide();
        img_box.hide();
    })

    function mostrar() {
        box.show();
        img_box.show();
    }

    function esconder(){
        box.hide();
        img_box.hide();
    }

});