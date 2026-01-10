import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import SidebarComponent from './sidebar/sidebar.component';
import DashboardComponent from './dashboard/dashboard';
import { ResponseData } from './types/response.interface';
import { Tab } from './types/tab.interface';
import { Card, ToggledData } from './types/card.interface';

const fetchData: ResponseData = {
  tabs: [
    {
      id: 'overview',
      title: 'Overview',
      cards: [
        {
          id: 'balcony-weather',
          title: 'Balcony',
          layout: 'horizontalLayout',
          items: [
            {
              type: 'sensor',
              icon: 'thermostat',
              label: 'Temperature',
              value: {
                amount: 18.5,
                unit: '\u00B0C',
              },
            },
            {
              type: 'sensor',
              icon: 'water_drop',
              label: 'Humidity',
              value: {
                amount: 72,
                unit: '%',
              },
            },
            {
              type: 'sensor',
              icon: 'cloud',
              label: 'Weather',
              value: {
                amount: 1,
                unit: 'clear',
              },
            },
          ],
        },
        {
          id: 'indoor-rooms',
          title: 'Rooms',
          layout: 'verticalLayout',
          items: [
            {
              type: 'sensor',
              icon: 'co2',
              label: 'CO2 Sensor',
              value: {
                amount: 520,
                unit: 'ppm',
              },
            },
            {
              type: 'sensor',
              icon: 'water_drop',
              label: 'Humidity',
              value: {
                amount: 45,
                unit: '%',
              },
            },
          ],
        },
        {
          id: 'bathroom-motion',
          title: 'Bathroom',
          layout: 'singleDevice',
          items: [
            {
              type: 'sensor',
              icon: 'motion_photos_on',
              label: 'Motion Sensor',
              value: {
                amount: 1,
                unit: 'detected',
              },
            },
          ],
        },
        {
          id: 'living-room-mixed',
          title: 'Living Room',
          layout: 'verticalLayout',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Floor Lamp',
              state: true,
            },
            {
              type: 'device',
              icon: 'power',
              label: 'TV Socket',
              state: false,
            },
            {
              type: 'sensor',
              icon: 'thermostat',
              label: 'Temperature',
              value: {
                amount: 23.5,
                unit: '\u00B0C',
              },
            },
            {
              type: 'sensor',
              icon: 'co2',
              label: 'CO2 Sensor',
              value: {
                amount: 610,
                unit: 'ppm',
              },
            },
          ],
        },
      ],
    },
    {
      id: 'lights',
      title: 'Lights',
      cards: [
        {
          id: 'kitchen-light',
          title: 'Kitchen',
          layout: 'singleDevice',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Ceiling Light',
              state: true,
            },
          ],
        },
        {
          id: 'corridor-light',
          title: 'Corridor',
          layout: 'singleDevice',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Ceiling Light',
              state: false,
            },
          ],
        },
        {
          id: 'living-room-light',
          title: 'Living Room',
          layout: 'singleDevice',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Chandelier',
              state: true,
            },
          ],
        },
        {
          id: 'bedroom-light',
          title: 'Bedroom',
          layout: 'singleDevice',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Main Light',
              state: true,
            },
          ],
        },
        {
          id: 'bathroom-light',
          title: 'Bathroom',
          layout: 'singleDevice',
          items: [
            {
              type: 'device',
              icon: 'lightbulb',
              label: 'Ceiling Light',
              state: false,
            },
          ],
        },
      ],
    },
  ],
};

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, SidebarComponent, DashboardComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('smart-home-ui');

  data: ResponseData = fetchData;
  tabs = signal<Tab[]>(this.data.tabs);

  activeIdTab = signal<Tab['id']>(this.tabs()[0]['id']);

  setActiveTab(id: Tab['id']) {
    this.activeIdTab.set(id);
  }

  getCard(id: Card['id']): Card {
    return this.tabs()
      .find((tab) => tab.id === this.activeIdTab())!
      .cards.find((card) => card.id === id)!;
  }

  toggledDevice(data: ToggledData) {
    const { cardId, device } = data;
    console.log(cardId);
    const card = this.getCard(cardId!);
    const updateCard: Card = {
      ...card,
      items: card.items.map((item) => (item === device ? { ...item, state: !item.state } : item)),
    };

    this.tabs.update((previous) =>
      previous.map((tab) =>
        tab.id === this.activeIdTab()
          ? {
              ...tab,
              cards: tab.cards.map((card) => (card.id === updateCard.id ? updateCard : card)),
            }
          : tab,
      ),
    );
  }
}
