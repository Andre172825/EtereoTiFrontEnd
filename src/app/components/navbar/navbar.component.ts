import { Component, OnInit , Inject} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menus = ['Inicio','Quienes somos','Nuestros servicios','Contactenos'];
  menus_link = ['/main','/aboutus','/#','/#']
  menuInteractivo:boolean = true;

  constructor(public router: Router) { 
    //Saber la ruta que se esta cambiando    
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){        
        var dato = val;
        this.nav_dinamico(dato.url);       
      }
    });    
  }

  ngOnInit(): void {   
  }

  //funcion para obtener el menu que se esta visualizando
  nav_dinamico(dato){        
    if((dato == "/main")==false)    
      this.menuInteractivo = false;
    else
      this.menuInteractivo = true;
  }
}
