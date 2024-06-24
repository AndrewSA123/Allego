namespace Allego_Tech_Test
{
	public class Program
	{
		private static void Main(string[] args)
		{
			bool success = false;
			int numberOfFiles = 0;

			while(!success)
			{
				Console.WriteLine("Input number of files you wish to join together.");
				success = int.TryParse(Console.ReadLine(), out numberOfFiles);

				if (!success) Console.WriteLine("Invalid number, please try again.");
				if (numberOfFiles == 0) Console.WriteLine("Number of input files must be greater than 0.");
			}
			int count = 1;

			var outputList = new List<string>();

			while(count <= numberOfFiles)
			{
				Console.WriteLine($"Paste the file path for file number {count}");
				string path = Console.ReadLine();
                if (!File.Exists(path))
                {
					Console.WriteLine("File not found.");
					continue;
                }
                outputList.AddRange(File.ReadAllLines(path));
				count++;
			}

			if(outputList != new List<string>())
			{
				outputList.Sort();
				Console.WriteLine("Input the file name for the output file.");
				string fileName = Console.ReadLine() + ".txt";
				File.WriteAllLines(fileName, outputList);
				Console.WriteLine($"{fileName} output to the root folder");
				return;
			}

			Console.WriteLine("No files joined.");
		}
	}
}
