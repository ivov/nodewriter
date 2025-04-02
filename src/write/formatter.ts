import { Biome, Distribution } from "@biomejs/js-api";
import { FORMATTER_OPTIONS } from "~/constants";

export class Formatter {
	private biome: Biome | null = null;

	async format(source: string, ext: "js" | "json") {
		return (await this.getBiome())
			.formatContent(source, { filePath: `file.${ext}` })
			.content.split("\n")
			.filter((line) => line.trim() !== "")
			.join("\n");
	}

	private async getBiome() {
		if (this.biome) return this.biome;

		this.biome = await Biome.create({ distribution: Distribution.NODE });
		this.biome.applyConfiguration(FORMATTER_OPTIONS);

		return this.biome;
	}
}
