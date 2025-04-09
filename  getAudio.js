import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { OpenAI } from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI();

async function generateAudioFromText(text, filename = "output.mp3") {
  try {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "shimmer", // alloy, echo, fable, onyx, nova, shimmer
      input: text,
    });
    const buffer = Buffer.from(await mp3.arrayBuffer());

    const audioDir = path.join(__dirname, "audio");
    const filePath = path.join(audioDir, filename);
    fs.writeFileSync(filePath, buffer);

    console.log(`${filePath}`);
  } catch (err) {
    console.error(err);
  }
}

const text = `ШІ дійсно може бути корисним, але без елементарних знань та уваги до деталей можуть виникнути великі проблеми. Головне — не просто використовувати інструменти, але й розуміти їх обмеження.`
generateAudioFromText(text, "frame8.mp3");
