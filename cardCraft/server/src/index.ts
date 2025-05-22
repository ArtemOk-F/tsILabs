// server/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

// Интерфейс карты
interface GameCard {
  title: string;
  description: string;
  cost: number;
  attack: number;
  health: number;
}

const app = express();
app.use(cors());
app.use(express.json());

// Абсолютный путь до файла с данными
const DATA_FILE = path.resolve(__dirname, 'cards.json');

// Чтение массива карт из файла
async function readCards(): Promise<GameCard[]> {
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(content) as GameCard[];
  } catch (err) {
    // если файл не существует или некорректен, возвращаем пустой массив
    return [];
  }
}

// Запись массива карт в файл
async function writeCards(cards: GameCard[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(cards, null, 2), 'utf-8');
}

// GET /api/cards — возвращает все карты
app.get('/api/cards', async (_req: Request, res: Response) => {
  const cards = await readCards();
  res.json(cards);
});

// POST /api/cards — добавляет новую карту
app.post(
  '/api/cards',
  async (req: Request<{}, {}, GameCard>, res: Response) => {
    const { title, description, cost, attack, health } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const cards = await readCards();
    const newCard: GameCard = { title, description, cost, attack, health };
    cards.unshift(newCard);
    await writeCards(cards);

    res.status(201).json(newCard);
  }
);

// Запуск сервера
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});