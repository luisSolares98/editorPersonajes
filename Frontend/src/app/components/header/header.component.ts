import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../../services/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dashbord = false;
  @Input() list = false;
  @Input() edit = false;
  constructor(private sConfig: ConfigService, private _router: Router) { }

  ngOnInit(): void {
    if(!this.sConfig.getCookie("usuarioId")) {
      this._router.navigate(["login"]);
    }
  }

}
