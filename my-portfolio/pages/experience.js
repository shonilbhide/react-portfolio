export default function Experience() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Experience</h1>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Gen-AI Engineer Intern - Frobe AI</h2>
          <p className="text-gray-400">July 2024 - September 2024</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Designed and implemented an AGI solution using fine-tuned Mistral models.</li>
            <li>Developed a scalable AI pipeline, optimizing retrieval-augmented generation (RAG).</li>
            <li>Integrated Redis as a vector database, improving response relevance by 0.87.</li>
          </ul>
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Analyst - Deloitte Consulting</h2>
          <p className="text-gray-400">September 2021 - July 2023</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Developed 17+ end-to-end CI/CD ETL pipelines for Walmart Tax Reports using PySpark & BigQuery.</li>
            <li>Reduced processing time from 3.5 hours to 1.2 hours.</li>
            <li>Configured AWS Glue jobs to process 20M daily trades for Vanguard.</li>
          </ul>
        </div>
      </div>
    );
  }
  