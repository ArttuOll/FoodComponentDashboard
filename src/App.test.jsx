import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import fetchMock from "jest-fetch-mock";
import SearchBar from "elements/header/components/search_bar/search_bar";
import SearchButton from "elements/header/components/search_bar/search_button";
import mockResponse from "./mocks/finer_eli_response.json";

fetchMock.enableMocks();

const FOOD_NAME_URL = "http://localhost:3001/food/?q=ruis";
const FOOD_COMPOSITION_URL = "http://localhost:3001/food/666";

describe("Header", () => {
  const setup = () => {
    const foodDataCallback = jest.fn();
    const errorCallback = jest.fn();
    render(<SearchBar foodDataCallback={foodDataCallback} errorCallback={errorCallback} />);
    fetch.mockResponse(JSON.stringify(mockResponse));
  };

  const writeToSearchBar = async (input) => {
    const searchBar = screen.getByPlaceholderText("Search for a food...");
    await userEvent.type(searchBar, input, { delay: 1 });
  };

  const clickSearchButton = async () => {
    await act(async () => {
      const searchButton = await screen.findByRole("button");
      userEvent.click(searchButton);
    });
  };

  const renderSearchButton = (foodIdLookupCallbackStub) => {
    const foodIdLookupCallback = jest.fn(foodIdLookupCallbackStub) || jest.fn();
    const foodDataCallback = jest.fn();
    const errorCallback = jest.fn();
    render(
      <SearchButton
        foodIdLookupCallback={foodIdLookupCallback}
        foodDataCallback={foodDataCallback}
        errorCallback={errorCallback}
      />
    );
  };

  test("User can type into search bar", async () => {
    setup();
    await writeToSearchBar("ruisleipä");
    const searchBar = screen.getByPlaceholderText("Search for a food...");
    expect(searchBar).toHaveValue("ruisleipä");
  });

  test("API is called when user types more than 4 characters", async () => {
    setup();
    await writeToSearchBar("ruisl");
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(FOOD_NAME_URL);
  });

  test("API is not called when user types 4 or less characters", async () => {
    setup();
    await writeToSearchBar("ruis");
    expect(fetch.mock.calls.length).toEqual(0);
  });

  test("Nothing happens when downarrow pressed when 4 or less characters typed", async () => {
    setup();
    await writeToSearchBar("ruis{arrowdown}");
    expect(fetch.mock.calls.length).toEqual(0);
    expect(screen.queryByText(/puuro/i)).not.toBeInTheDocument();
  });

  test("Nothing happens when uparrow pressed when 4 or less characters typed", async () => {
    setup();
    await writeToSearchBar("ruis{arrowup}");
    expect(fetch.mock.calls.length).toEqual(0);
    expect(screen.queryByText(/puuro/i)).not.toBeInTheDocument();
  });

  test("API is called when search button clicked", async () => {
    renderSearchButton(() => 666);
    await clickSearchButton();
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(FOOD_COMPOSITION_URL);
  });

  test("API is not called if search button pressed without search query", async () => {
    renderSearchButton();
    await clickSearchButton();
    expect(fetch.mock.calls.length).toEqual(0);
  });
});
