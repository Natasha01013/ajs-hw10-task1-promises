import {json} from "../parser.js";
import {read} from "../reader.js";
//import {GameSaving} from "./gamesaving.js";
import GameSavingLoader from "../gamesavingloader.js";

jest.mock('../parser.js');
jest.mock('../reader.js');

beforeEach(() => {
    jest.clearAllMocks(); // Очищаем моки перед каждым тестом
});

test('cheking GameSavingLoader', async () => {
    const mockBuffer = new ArrayBuffer(8);
    read.mockResolvedValue(mockBuffer);
    const mockJsonString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
    json.mockResolvedValue(mockJsonString );
    const result = await GameSavingLoader.load();
    expect(result).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
})

test('cheking errors', async () => {
    read.mockRejectedValue(new Error('Ошибка при загрузке'))
    await expect(GameSavingLoader.load()).rejects.toThrow('Ошибка при загрузке');
})

test('cheking parser.js', async () => {
    const input = new ArrayBuffer(4);
    const start = Date.now();
    await json(input);
    const end = Date.now();
    expect(end - start).toBeLessThanOrEqual(500);  
});
  
test('cheking reader.js', async () => {
      const mockBuffer = new ArrayBuffer(10); // Пример какого-то ArrayBuffer
      read.mockResolvedValue(mockBuffer); // Мокируем возвращаемое значение
  
      // Проверяем, что возвращаемое значение будет таким же
      const result = await read();
      expect(result).toBe(mockBuffer);
});