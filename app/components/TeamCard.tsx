import React, { useState } from "react";
import Card from "./Card";
import Member1 from "@/public/TeamMember1.jpeg";
import Member2 from "@/public/TeamMember2.jpeg";
import Member3 from "@/public/TeamMember3.jpeg";
import CardText from "./CardText";

interface TeamCardProps {
  title: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ title }) => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const members = [
    {
      name: "Member1",
      img: Member1,
      description:
        "Born from the forbidden union of an ancient dragon and a high elf seer, Luminara was raised in the hidden sanctums of the Dragon-Elf alliance. Her unique heritage grants her the ability to manipulate light and shadow, a rare gift that has made her both revered and feared across the realms. She has dedicated her immortal life to maintaining the balance between the fading world of magic and the burgeoning era of technology.",
    },
    {
      name: "Member2",
      img: Member2,
      description:
        " Luminara stands tall with a graceful, elongated elven frame, her skin a shimmering silver that dances with iridescent scales under moonlight. Her piercing blue eyes hold the ancient wisdom of a dragon, framed by long, silver-white hair that flows like molten metal. Her delicate features are accentuated by a pair of ethereal wings that stretch wide and shimmer with the colors of the aurora borealis. Her tail, a mix of scales and elongated elven spikes, sweeps behind her with regal poise.",
    },
    {
      name: "Member3",
      img: Member3,
      description:
        " Luminara is a stoic guardian with a heart of gold. Her wisdom is matched only by her compassion, which often leads her to intervene in human affairs. Despite her regal and somewhat intimidating presence, she is curious about the ever-changing world and seeks knowledge in its every corner. Her patience is boundless, but she is not without passion, which flares like the breath of a dragon when her loved ones are threatened or the balance she so fiercely protects is at risk.",
    },
  ];

  const handleCardClick = (name: string) => {
    setSelectedMember(name);
  };

  const selectedMemberData = members.find(
    (member) => member.name === selectedMember
  );

  return (
    <div
      id="team"
      className="ml-[9%]">
      <div className="text-4xl text-white font-medium leading-[48px] mt-36">
        {title}
      </div>
      <div className="flex justify-center items-end gap-[20px] overflow-x-visible overflow-y-visible mt-10">
        {selectedMemberData && (
          <CardText
            name={selectedMemberData.name}
            description={selectedMemberData.description}
          />
        )}
        {members.map((member) => (
          <Card
            key={member.name}
            img={member.img}
            className={`min-h-[300px] ${
              selectedMember === member.name
                ? "w-[60%] min-h-[400px]"
                : "w-[40%]"
            }`}
            onClick={() => handleCardClick(member.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
