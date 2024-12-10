import GameSavingLoader from "../gamesavingloader.js";

test('should be callback', async () => {
    const data = await GameSavingLoader.load().then((saving) => {
      // saving объект класса GameSaving
      return saving;
    }, (error) => {
      // error
      throw new Error(error);
    });
    expect(data).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
});