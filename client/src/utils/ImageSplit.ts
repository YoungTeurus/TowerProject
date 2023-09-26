export interface SplitImageConfig {
    tilePrefix: string;

    tileWCount: number;
    tileHCount: number;

    tileW: number;
    tileH: number;

    marginW: number;
    marginH: number;

    startTop: number;
    startLeft: number;
}

export interface ImagePart {
    id: string,
    src: string
}

export function loadImageAndSplit(imgSrc: string, config: SplitImageConfig): Promise<ImagePart[]> {
    return new Promise((resolve, reject) => {
        let result: ImagePart[] = [];

        const image = new Image();
        image.src = imgSrc;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
                const { width, height } = image;
                const partWidth = config.tileW;
                const partHeight = config.tileH;

                for (let row = 0; row < config.tileHCount; row++) {
                    for (let col = 0; col < config.tileWCount; col++) {
                        canvas.width = partWidth;
                        canvas.height = partHeight;
                        context.drawImage(
                            image,
                            col * partWidth + col * config.marginW + config.startLeft,
                            row * partHeight + row * config.marginH + config.startTop,
                            partWidth,
                            partHeight,
                            0,
                            0,
                            partWidth,
                            partHeight
                        );
                        const partSrc = canvas.toDataURL();

                        result.push({ src: partSrc, id: `${config.tilePrefix}-${row + 1}-${col + 1}`});
                    }
                }
                resolve(result);
            }
            else {
                reject("No context found");
            }
        };
    });
}