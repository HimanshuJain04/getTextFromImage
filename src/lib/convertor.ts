import { createWorker } from 'tesseract.js';

const convertToText = async (image: string) => {
    const worker = await createWorker('eng');
    const ret = await worker.recognize(image);
    const text = ret.data.text
    await worker.terminate();
    return text;
}

export default convertToText;