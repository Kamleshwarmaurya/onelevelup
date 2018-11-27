import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public faBars = faBars;
  public faFacebook = faFacebook;
  public faInstagram = faInstagram;
  public faTwitter = faTwitter;
  public faSkype = faSkype;
  public faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit() {

  }

}
