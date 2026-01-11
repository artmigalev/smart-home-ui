import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import DashboardComponent from './layouts/dashboard/dashboard';
import SidebarComponent from '@layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('smart-home-ui');

  // data: ResponseData = fetchData;
  // tabs = signal<Tab[]>(this.data.tabs);

  // activeIdTab = signal<Tab['id']>(this.tabs()[0]['id']);

  // setActiveTab(id: Tab['id']) {
  //   this.activeIdTab.set(id);
  // }

  // getCard(id: Card['id']): Card {
  //   return this.tabs()
  //     .find((tab) => tab.id === this.activeIdTab())!
  //     .cards.find((card) => card.id === id)!;
  // }

  // toggledDevice(data: ToggledData) {
  //   const { cardId, device } = data;
  //   console.log(cardId);
  //   const card = this.getCard(cardId!);
  //   const updateCard: Card = {
  //     ...card,
  //     items: card.items.map((item) => (item === device ? { ...item, state: !item.state } : item)),
  //   };

  //   this.tabs.update((previous) =>
  //     previous.map((tab) =>
  //       tab.id === this.activeIdTab()
  //         ? {
  //             ...tab,
  //             cards: tab.cards.map((card) => (card.id === updateCard.id ? updateCard : card)),
  //           }
  //         : tab,
  //     ),
  //   );
  // }
}
