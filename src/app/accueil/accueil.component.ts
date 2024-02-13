import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Plat {
  nom: string;
  prix: number;
  description: string;
  image: string;
  quantite: number;
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})

export class AccueilComponent {
  hamburgerMenu : any;

  plats : Plat[] = [
    {
      "nom": 'Burger',
      "prix": 12,
      "description": 'Menu burger avec frites et boisson',
      "image": "burger.jpeg",
      "quantite": 0
    },
    {
      "nom": 'Pizza',
      "prix": 22,
      "description": 'Pizza 4 fromages',
      "image": "pizza.jpeg",
      "quantite": 0

    },
    {
      "nom": 'Pasta',
      "prix": 8,
      "description": 'Pasta bolognese',
      "image": "pates.jpeg",
      "quantite": 0
    },
    {
      "nom": 'Sushi',
      "prix": 18,
      "description": 'Plateau de sushi',
      "image": "sushi.jpeg",
      "quantite": 0
    }
  ];
  panier: Plat[] = [];

  ajouterAuPanier(plat: Plat) {
    const index = this.panier.findIndex(item => item.nom === plat.nom);

    if (index !== -1) {
      // Si l'article est déjà dans le panier, augmentez simplement la quantité
      this.panier[index].quantite++;
    } else {
      // Sinon, ajoutez l'article au panier avec une quantité initiale de 1
      this.panier.push({ ...plat, quantite: 1 });
    }
  }

  calculerTotal(): number {
    return this.panier.reduce((total, article) => total + article.prix * article.quantite, 0);
  }

  calculerNombreTotalArticles(): number {
    return this.panier.reduce((total, article) => total + article.quantite, 0);
  }

  validerPanier() {
    alert('Commande validée');
    this.panier = [];
  }

  openNavMobile() {
    // Sélectionnez le bouton hamburger et le menu
    let hamburgerButton = document.querySelector('.nav-hamburger-button');
    this.hamburgerMenu = document.getElementById('nav-hamburger-menu');

    console.log(hamburgerButton);

    if (this.hamburgerMenu !== null) {
      if (hamburgerButton && this.hamburgerMenu) {
        hamburgerButton.addEventListener('click', () => {
          if (this.hamburgerMenu.classList.contains('show')) {
            this.hamburgerMenu.classList.remove('show');
          } else {
            this.hamburgerMenu.classList.add('show');
          }
        });
      }
    }
  }
}

@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule] // Ajoutez CommonModule dans la liste des imports
})
export class AccueilModule { }
