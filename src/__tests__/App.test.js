import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import "../__mocks__/intersectionObserverMock";
import { act } from "react";

const mockResponse = [
  {
    id: 1,
    location: "https://picsum.photos/id/0/200",
    purchaseDate: "2020-12-27T00:00:00.000Z",
    category: "Food",
    description:
      "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
    price: 99882,
    name: "auxiliary generating microchip",
  },
  {
    id: 2,
    location: "https://picsum.photos/id/1/200",
    purchaseDate: "2020-12-28T00:00:00.000Z",
    category: "Technology",
    description:
      "I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
    price: 69706,
    name: "1080p backing up port",
  },
  {
    id: 3,
    location: "https://picsum.photos/id/2/200",
    purchaseDate: "2020-12-29T00:00:00.000Z",
    category: "Footwear",
    description:
      "You can&#x27;t reboot the feed without transmitting the back-end SMS pixel!",
    price: 8307,
    name: "auxiliary generating panel",
  },
  {
    id: 4,
    location: "https://picsum.photos/id/3/200",
    purchaseDate: "2020-12-30T00:00:00.000Z",
    category: "Travel",
    description: "We need to navigate the neural HTTP transmitter!",
    price: 65580,
    name: "neural connecting microchip",
  },
  {
    id: 5,
    location: "https://picsum.photos/id/4/200",
    purchaseDate: "2020-12-31T00:00:00.000Z",
    category: "Entertainment",
    description:
      "Use the virtual PCI microchip, then you can program the solid state bus!",
    price: 26829,
    name: "1080p overriding bus",
  },
  {
    id: 6,
    location: "https://picsum.photos/id/5/200",
    purchaseDate: "2021-01-01T00:00:00.000Z",
    category: "Automotive",
    description:
      "You can&#x27;t copy the firewall without compressing the solid state SAS sensor!",
    price: 57825,
    name: "wireless backing up capacitor",
  },
  {
    id: 7,
    location: "https://picsum.photos/id/6/200",
    purchaseDate: "2021-01-02T00:00:00.000Z",
    category: "Automotive",
    description:
      "The COM monitor is down, calculate the solid state pixel so we can connect the ADP feed!",
    price: 3139,
    name: "bluetooth copying application",
  },
  {
    id: 8,
    location: "https://picsum.photos/id/7/200",
    purchaseDate: "2021-01-03T00:00:00.000Z",
    category: "Food",
    description:
      "The XML circuit is down, calculate the 1080p alarm so we can compress the PNG monitor!",
    price: 56714,
    name: "mobile quantifying port",
  },
  {
    id: 9,
    location: "https://picsum.photos/id/8/200",
    purchaseDate: "2021-01-04T00:00:00.000Z",
    category: "Food",
    description: "We need to reboot the bluetooth SDD interface!",
    price: 2327,
    name: "solid state backing up program",
  },
  {
    id: 10,
    location: "https://picsum.photos/id/9/200",
    purchaseDate: "2021-01-05T00:00:00.000Z",
    category: "Automotive",
    description:
      "Use the auxiliary AGP firewall, then you can calculate the cross-platform capacitor!",
    price: 4848,
    name: "redundant indexing firewall",
  },
  {
    id: 11,
    location: "https://picsum.photos/id/10/200",
    purchaseDate: "2021-01-06T00:00:00.000Z",
    category: "Food",
    description:
      "I&#x27;ll compress the online HDD driver, that should sensor the SMTP monitor!",
    price: 69230,
    name: "cross-platform indexing feed",
  },
  {
    id: 12,
    location: "https://picsum.photos/id/11/200",
    purchaseDate: "2021-01-07T00:00:00.000Z",
    category: "Travel",
    description:
      "Try to transmit the SMS microchip, maybe it will program the online capacitor!",
    price: 53863,
    name: "mobile hacking array",
  },
  {
    id: 13,
    location: "https://picsum.photos/id/12/200",
    purchaseDate: "2021-01-08T00:00:00.000Z",
    category: "Apparel",
    description:
      "You can&#x27;t connect the bandwidth without quantifying the redundant AGP bus!",
    price: 42693,
    name: "cross-platform synthesizing hard drive",
  },
  {
    id: 14,
    location: "https://picsum.photos/id/13/200",
    purchaseDate: "2021-01-09T00:00:00.000Z",
    category: "Apparel",
    description:
      "The TCP interface is down, program the bluetooth interface so we can input the XSS driver!",
    price: 24315,
    name: "online programming pixel",
  },
  {
    id: 15,
    location: "https://picsum.photos/id/14/200",
    purchaseDate: "2021-01-10T00:00:00.000Z",
    category: "Food",
    description:
      "Use the open-source ADP circuit, then you can bypass the wireless bus!",
    price: 47889,
    name: "virtual quantifying transmitter",
  },
];

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("renders Purchase List", async () => {
  render(<App />);

  const heading = screen.getByText("Purchases");
  expect(heading).toBeInTheDocument();

  const table = screen.getByRole("table");
  const trs = table.querySelectorAll("tbody tr");

  await waitForElementToBeRemoved(() => screen.getByText("loading..."));

  await waitFor(() => {
    // expect(trs).toHaveLength(2);

    expect(table.querySelector("tbody").children.length).toBe(5);
  });
});
