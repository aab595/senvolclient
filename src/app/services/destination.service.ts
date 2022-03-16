import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  destinations: Destination[] = [
    {
      id: 1,
      title: 'Paris, France',
      cover:
        'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg',
      description:
        "Paris, capitale de la France, est une grande ville européenne et un centre mondial de l'art, de la mode, de la gastronomie et de la culture. Son paysage urbain du XIXe siècle est traversé par de larges boulevards et la Seine. Outre les monuments comme la tour Eiffel et la cathédrale gothique Notre-Dame du XIIe siècle, la ville est réputée pour ses cafés et ses boutiques de luxe bordant la rue du Faubourg-Saint-Honoré.",
    },
    {
      id: 2,
      title: 'Casablanca, Maroc',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSGnGkHNfo0sNiclug-uIh3vXAWDhplr99w&usqp=CAU',
      description:
        "Casablanca est une ville portuaire et un pôle commercial situé à l'ouest du Maroc, face à l'océan Atlantique. L'héritage colonial français de la ville se reflète dans l'architecture mauresque du centre-ville, alliant style mauresque et Art déco européen. Partiellement érigée sur l'eau, l'immense mosquée Hassan II, achevée en 1993, comprend un minaret de 210 mètres de haut avec des lasers orientés vers La Mecque.",
    },
    {
      id: 3,
      title: 'New York, Etat Unis',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahgWb1ktfkhxRyznBM94in_fhlUYToiJOJg&usqp=CAU',
      description:
        "New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square.",
    },
    {
      id: 4,
      title: 'Québec, Canada',
      cover:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw1GQPX_qKkmMWSh0yqJshIo6Dvi7dtFxqQ&usqp=CAU',
      description:
        "Québec est une ville située sur le fleuve Saint-Laurent, dans la province canadienne essentiellement francophone de Québec. Fondée en 1608, elle comprend un centre colonial fortifié, le Vieux-Québec et la place Royale, avec des bâtiments en pierre et des rues étroites. Ce quartier abrite également l'hôtel Château Frontenac et l'imposante Citadelle de Québec. Les rues pavées du Petit-Champlain sont bordées de bistrots et de boutiques.",
    },
  ];

  getAllDestinations(): Destination[] {
    return this.destinations;
  }
}
