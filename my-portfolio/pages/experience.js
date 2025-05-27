export default function Experience() {
  return (
    <div>
      <h1>Experience</h1>
      <div>
        <h2>July 2024 - September 2024</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Designed and implemented an AGI solution using fine-tuned Mistral models.</li>
            <li>Developed a scalable AI pipeline, optimizing retrieval-augmented generation (RAG).</li>
            <li>Integrated Redis as a vector database, improving response relevance by 0.87.</li>
          </ul>
      </div>
      <div>
        <h2>September 2021 - July 2023</h2>
          <ul className="list-disc ml-6 mt-2">
            <li>Developed 17+ end-to-end CI/CD ETL pipelines for Walmart Tax Reports using PySpark & BigQuery.</li>
            <li>Reduced processing time from 3.5 hours to 1.2 hours.</li>
            <li>Configured AWS Glue jobs to process 20M daily trades for Vanguard.</li>
          </ul>      </div>
    </div>
  );
}
