const About = () => {
  return (
    <section
      className="bg-white text-gray-900 py-16 px-6 md:px-20 text-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-[#00032c] mb-6"
        >
          ჩვენს შესახებ
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          ჩვენ 2021 წლიდან ვაწარმოებთ სხვადასხვა ხელნაკეთ ნივთებს და
          სადღესასწაულო დეკორაციებს.{" "}
          <span className="font-semibold text-[#b48b18]">HobArt</span> არის
          ბრენდი, რომელსაც მოაქვს სიხარული თითოეული მომხმარებლის ცხოვრებაში.
          ჩვენ ვიყენებთ მაღალ ხარისხიან ნედლეულს, რათა შევქმნათ უნიკალური
          ხელნაკეთი დეკორაციები.
        </p>
      </div>
    </section>
  );
};

export default About;
