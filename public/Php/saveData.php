<?php

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    //Datos del archivo
    $textoEnviado = $json; //Datos que envia la pagina
    $fichero = $_SERVER['DOCUMENT_ROOT'].'/encuesta_tesalia/Json/encuestaRespuestas.json';
    $modoDeApertura = "a+";
    $separador= ",";
    $datoInicial = '{ "datos": [';
    $datoCierre = ']}';
    $cantidadDatosEliminar = 2;

    if (file_exists($fichero)){
        echo "===== El fichero existe. Lo abro y escribo ===== \r\n"; 
        //Leeo y quito las lineas.
        $aLineas = file($fichero);
        echo "===== INICIO LECTURA ARCHIVO EXISTE ==== \r\n"; 
        print_r($aLineas);
        echo "===== FIN LECTURA ARCHIVO EXISTE ==== \r\n"; 
        
        $longitud = count($aLineas);
        echo "===== CANTIDAD LINEAS ARCHIVO ====" . $longitud .  "\r\n"; 
        
        $archivo = fopen($fichero, "w+b");
        for($i=0; $i<$longitud; $i++)
        {
            echo "==== LINEA EVALUADA ===== " . $i . "\r\n";
            if ($i >= $longitud-1){
                $caracteres = strlen($aLineas[$i])-2;           //3
                echo "ENTRO" . "CARCATERES: " . $caracteres;
                //echo strlen($aLineas[$i]);
                echo substr($aLineas[$i], 1, $caracteres);
                fwrite($archivo, substr($aLineas[$i], 0, $caracteres)); // 1
            }
            else{
                //echo strlen($aLineas[$i]);
                
                echo $aLineas[$i];
                fwrite($archivo, $aLineas[$i]);
            }
        }
        fclose($archivo);

        
        //$modoDeApertura = "a";
        echo "========== AGREGA NUEVA LINEA AL ARCHIVO ============";
        $separador= ",";
        $fp = fopen($fichero, $modoDeApertura) or die ("error"); 
        if ($fp) {
            fputs($fp, $separador);
            echo $separador;
            fputs($fp, "\r\n");
            echo "\r\n";
            fputs($fp, $textoEnviado);
            echo $textoEnviado;
            fputs($fp, $datoCierre);
            echo $datoCierre;
            echo '{"resultado":"Ok"}';
        }else{
            echo '{"resultado":"Error"}';
        }
        
     }else{
        echo "El fichero no existe. Lo creo y abro.";
        //$modoDeApertura = "w+";
        $separador= "";
        $fp = fopen($fichero, $modoDeApertura) or die ("error"); 
        if ($fp) {
            fputs($fp, $datoInicial);
            fputs($fp, "\r\n");
            fputs($fp, $textoEnviado);
            fputs($fp, $datoCierre);
            echo '{"resultado":"Ok"}';
        }else{
            echo '{"resultado":"Error"}';
        }
     } 
    
    if ($fp) {
        fclose($fp);
    }

?>

