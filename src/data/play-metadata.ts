// Play and scene synopses for context before reading

export interface Character {
  name: string;
  description: string;
}

export interface SceneSynopsis {
  setting: string;
  summary: string;
  characters: string[];
}

export interface PlayMetadata {
  playId: string;
  title: string;
  synopsis: string;
  themes: string[];
  characters: Character[];
  sceneSynopses: {
    [actScene: string]: SceneSynopsis; // e.g., "1_1" for Act 1, Scene 1
  };
}

export const playMetadata: { [playId: string]: PlayMetadata } = {
  'the_tempest': {
    playId: 'the_tempest',
    title: 'The Tempest',
    synopsis: `Prospero, the rightful Duke of Milan, was usurped by his brother Antonio twelve years ago and cast adrift with his infant daughter Miranda. They landed on a magical island where Prospero has spent years mastering sorcery. Now, using his powers, he conjures a great storm to shipwreck his enemies—including Antonio, the King of Naples, and the King's son Ferdinand—on the island's shores. What follows is a tale of revenge transformed into reconciliation, young love between Miranda and Ferdinand, comic relief from the spirit Ariel and the monster Caliban, and ultimately forgiveness and restoration.`,
    themes: ['Forgiveness and Reconciliation', 'Power and Control', 'Colonialism', 'Magic and Nature', 'Freedom and Servitude'],
    characters: [
      { name: 'Prospero', description: 'The exiled Duke of Milan, a powerful sorcerer seeking justice and reconciliation' },
      { name: 'Miranda', description: 'Prospero\'s innocent daughter, who has lived on the island since infancy' },
      { name: 'Ariel', description: 'An airy spirit enslaved to Prospero, longing for freedom' },
      { name: 'Caliban', description: 'A native of the island, son of the witch Sycorax, enslaved by Prospero' },
      { name: 'Ferdinand', description: 'Prince of Naples, who falls in love with Miranda' },
      { name: 'Alonso', description: 'King of Naples, who aided Antonio in usurping Prospero' },
      { name: 'Antonio', description: 'Prospero\'s treacherous brother, the usurping Duke of Milan' },
      { name: 'Sebastian', description: 'Alonso\'s brother, ambitious and easily corrupted' },
      { name: 'Gonzalo', description: 'An honest old counselor who helped Prospero and Miranda escape' },
      { name: 'Stephano', description: 'A drunken butler' },
      { name: 'Trinculo', description: 'A jester' },
    ],
    sceneSynopses: {
      '1_1': {
        setting: 'A ship at sea during a violent storm',
        summary: 'The play opens with a fierce tempest battering a ship carrying King Alonso of Naples and his court. Despite the efforts of the ship\'s crew, the passengers fear the vessel will sink. This chaotic opening establishes the storm\'s supernatural power.',
        characters: ['Alonso', 'Antonio', 'Sebastian', 'Gonzalo', 'Ship\'s Master', 'Boatswain']
      },
      '1_2': {
        setting: 'Prospero\'s island',
        summary: 'Miranda watches the storm with distress, but Prospero reveals he created it through magic and no one was harmed. He tells Miranda their backstory: how Antonio usurped his dukedom twelve years ago with King Alonso\'s help, and how they survived at sea thanks to Gonzalo. Prospero then summons Ariel, who describes executing the tempest. Ariel reminds Prospero of his promise of freedom, but Prospero demands more service first. We meet Caliban, who curses Prospero and Miranda. Finally, Ariel leads Ferdinand to Miranda, and the two fall instantly in love, though Prospero pretends to be stern.',
        characters: ['Prospero', 'Miranda', 'Ariel', 'Caliban', 'Ferdinand']
      },
      '2_1': {
        setting: 'Another part of the island',
        summary: 'The shipwrecked nobles recover on the beach. Gonzalo tries to comfort the grieving King Alonso, who believes his son Ferdinand has drowned. Antonio and Sebastian mock Gonzalo\'s optimism. When Ariel\'s music puts most of the party to sleep, Antonio persuades Sebastian to murder his brother Alonso and seize the throne of Naples—just as Antonio once seized Milan from Prospero. As they draw their swords, Ariel wakes Gonzalo, who alerts the others, foiling the plot.',
        characters: ['Alonso', 'Sebastian', 'Antonio', 'Gonzalo', 'Adrian', 'Francisco', 'Ariel']
      },
      '2_2': {
        setting: 'Another part of the island',
        summary: 'Caliban, gathering wood and cursing Prospero, encounters Trinculo the jester, who hides under Caliban\'s cloak when a storm approaches. Stephano the butler arrives, drunk, and discovers the strange "four-legged monster." After sharing wine with Caliban, Stephano becomes Caliban\'s new master. Caliban, delighted to escape Prospero\'s service, promises to show Stephano the island\'s riches and plots to murder Prospero.',
        characters: ['Caliban', 'Trinculo', 'Stephano']
      },
      '3_1': {
        setting: 'Before Prospero\'s cell',
        summary: 'Ferdinand performs the labor Prospero has assigned him (carrying logs) while thinking of Miranda. She appears and offers to help him, and they profess their love for each other and agree to marry. Prospero watches from hiding, pleased that his plan is working.',
        characters: ['Ferdinand', 'Miranda', 'Prospero']
      },
      '3_2': {
        setting: 'Another part of the island',
        summary: 'Caliban, Stephano, and Trinculo continue drinking. Caliban urges them to kill Prospero while he sleeps and take Miranda as Stephano\'s queen. Ariel, invisible, causes confusion by mimicking their voices. Despite Trinculo\'s doubts, they drunkenly agree to Caliban\'s murderous plan and set off for Prospero\'s cell.',
        characters: ['Caliban', 'Stephano', 'Trinculo', 'Ariel']
      },
      '3_3': {
        setting: 'Another part of the island',
        summary: 'The weary nobles continue searching for Ferdinand. Prospero conjures a magical banquet that appears before them, but when they approach, Ariel appears as a harpy and makes it vanish. Ariel denounces Alonso, Antonio, and Sebastian for their crime against Prospero, declaring the sea took Ferdinand in revenge. The three "men of sin" are struck with guilt and madness, while Gonzalo observes their strange behavior with concern.',
        characters: ['Alonso', 'Sebastian', 'Antonio', 'Gonzalo', 'Adrian', 'Francisco', 'Ariel', 'Prospero']
      },
      '4_1': {
        setting: 'Before Prospero\'s cell',
        summary: 'Prospero gives Ferdinand his blessing to marry Miranda and conjures a betrothal masque featuring goddesses (Iris, Ceres, Juno) celebrating their union. The celebration is interrupted when Prospero remembers Caliban\'s plot against his life. He dismisses the spirits and delivers his famous "Our revels now are ended" speech. Ariel reports that he has led the drunken conspirators astray through thorns and swamps. Prospero and Ariel set a trap: they hang fine clothing on a line. When Caliban, Stephano, and Trinculo arrive, the two drunkards are distracted by the fancy garments, despite Caliban\'s warnings. Spirit hounds chase them away.',
        characters: ['Prospero', 'Ferdinand', 'Miranda', 'Ariel', 'Caliban', 'Stephano', 'Trinculo']
      },
      '5_1': {
        setting: 'Before Prospero\'s cell',
        summary: 'Ariel reports that the nobles are imprisoned by magic, with Gonzalo weeping at the others\' suffering. Moved by Ariel\'s compassion, Prospero decides to forgive his enemies rather than take revenge. He renounces his magic, breaking his staff and drowning his book. The nobles are brought forth, and Prospero reveals himself. Alonso repents and returns Prospero\'s dukedom. Prospero reveals that Ferdinand is alive and shows him with Miranda playing chess. The couple\'s engagement is celebrated. The Boatswain brings news that the ship is safe. Prospero promises to tell his story, free Ariel, and return to Milan, where "every third thought shall be my grave." In an epilogue, Prospero (or the actor) asks the audience to free him with their applause.',
        characters: ['Prospero', 'Ariel', 'Alonso', 'Gonzalo', 'Sebastian', 'Antonio', 'Ferdinand', 'Miranda', 'Caliban', 'Stephano', 'Trinculo', 'Boatswain', 'Master']
      }
    }
  },
  'all_s_well_that_ends_well': {
    playId: 'all_s_well_that_ends_well',
    title: 'All\'s Well That Ends Well',
    synopsis: `Helena, a physician's daughter, is hopelessly in love with Bertram, the young Count of Rossillion, who is far above her in social rank. When the King of France falls ill, Helena uses her late father's medical knowledge to cure him. As a reward, the King allows her to choose any husband she wishes—and she chooses Bertram. Forced into the marriage, Bertram flees to the wars in Italy, declaring he will never be a true husband to Helena until she can get the ring from his finger and bear his child—conditions he believes impossible. Through wit, determination, and a clever bed-trick, Helena fulfills both conditions and wins Bertram's acceptance, though whether she wins his love remains ambiguous. The play explores themes of merit versus birth, female agency, and the complexity of desire and honor.`,
    themes: ['Merit vs. Birth', 'Female Agency and Pursuit', 'Honor and Virtue', 'Deception and Truth', 'Unrequited Love'],
    characters: [
      { name: 'Helena', description: 'A physician\'s orphaned daughter, intelligent and determined, in love with Bertram' },
      { name: 'Bertram', description: 'Young Count of Rossillion, proud and immature, who rejects Helena' },
      { name: 'Countess of Rossillion', description: 'Bertram\'s mother, kind and wise, who loves Helena like a daughter' },
      { name: 'King of France', description: 'Gravely ill until Helena cures him; rewards her with her choice of husband' },
      { name: 'Lafew', description: 'An old lord, loyal to the King and the Countess' },
      { name: 'Parolles', description: 'A boastful coward and Bertram\'s companion, exposed as false' },
      { name: 'Diana', description: 'A virtuous young Florentine woman whom Bertram tries to seduce' },
      { name: 'Widow', description: 'Diana\'s mother, who helps Helena with her plan' },
      { name: 'Mariana', description: 'The Widow\'s neighbor' },
      { name: 'Lavatch', description: 'A clown, servant to the Countess' },
    ],
    sceneSynopses: {
      '1_1': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess, Helena, and Lord Lafew discuss the recent death of Bertram\'s father and Helena\'s father (the famous physician Gerard de Narbon). Bertram is preparing to leave for the King\'s court in Paris. Helena reveals in soliloquy that she loves Bertram hopelessly, as he is far above her station. Parolles, Bertram\'s companion, engages Helena in witty banter about virginity, though Helena sees through his false bravado.',
        characters: ['Countess', 'Helena', 'Bertram', 'Lafew', 'Parolles']
      },
      '1_2': {
        setting: 'Paris, the King\'s palace',
        summary: 'The ailing King of France discusses the war between Florence and Siena, granting his young lords permission to fight on either side. Bertram arrives and is warmly received. The King reminisces about Bertram\'s father and Helena\'s father, the physician who might have cured him, praising the elder Count\'s virtue and Gerard de Narbon\'s skill.',
        characters: ['King', 'Bertram', 'Lafew', 'First Lord Dumaine', 'Second Lord Dumaine']
      },
      '1_3': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess\'s steward reveals that he overheard Helena speaking of her love for Bertram. The Countess gently questions Helena, who eventually confesses her love and her plan to go to Paris to attempt to cure the King using her father\'s secret remedy. The Countess, moved, gives Helena her blessing and financial support for the journey.',
        characters: ['Countess', 'Lavatch', 'Steward', 'Helena']
      },
      '2_1': {
        setting: 'Paris, the King\'s palace',
        summary: 'The King bids farewell to the young lords going to war, including the Dumaine brothers, and wishes them honor. Bertram laments that he is too young to join them. Helena arrives and offers to cure the King. Though skeptical, the King agrees when Helena stakes her life on success and asks only to choose a husband from his wards as her reward.',
        characters: ['King', 'Bertram', 'Lafew', 'Parolles', 'Lords Dumaine', 'Helena']
      },
      '2_2': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess\'s clown, Lavatch, wishes to marry and engages in wordplay about cuckoldry. The Countess receives a letter from the King announcing Helena\'s success in curing him.',
        characters: ['Countess', 'Lavatch']
      },
      '2_3': {
        setting: 'Paris, the King\'s palace',
        summary: 'The cured King, newly vigorous, prepares to fulfill his promise to Helena. She modestly approaches several young lords, who each decline, before choosing Bertram. When Bertram protests that she is beneath his rank, the King angrily insists, asserting that virtue and honor matter more than birth. He threatens Bertram, who submits but privately vows never to consummate the marriage. Lafew mocks Parolles. Bertram tells Helena he must leave immediately for the wars and will not bed her.',
        characters: ['King', 'Helena', 'Bertram', 'Lafew', 'Parolles', 'Lords']
      },
      '2_4': {
        setting: 'Paris, the King\'s palace',
        summary: 'Helena sadly prepares to return to Rossillion. Parolles delivers a letter from Bertram and urges her to go home while Bertram goes to the wars. Despite her sorrow, Helena remains gracious.',
        characters: ['Helena', 'Parolles', 'Lavatch']
      },
      '2_5': {
        setting: 'Paris, the King\'s palace',
        summary: 'Bertram prepares to flee to Florence. He gives Parolles letters to deliver, one to his mother. Lafew warns Bertram that Parolles is a coward and a liar, but Bertram defends his companion.',
        characters: ['Bertram', 'Lafew', 'Parolles']
      },
      '3_1': {
        setting: 'Florence',
        summary: 'The Duke of Florence receives the French lords who have come to fight for him, welcoming their assistance in the war.',
        characters: ['Duke of Florence', 'Lords Dumaine', 'French soldiers']
      },
      '3_2': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess receives two letters: one from Bertram declaring he has fled France and will never return while Helena lives, setting impossible conditions for their marriage (she must get his ancestral ring and bear his child); and one from Helena announcing she will leave Rossillion so Bertram can return home. The Countess is furious with her son and sympathetic to Helena, but Helena has already departed on a pilgrimage.',
        characters: ['Countess', 'Lavatch', 'Steward', 'Lords Dumaine']
      },
      '3_3': {
        setting: 'Florence',
        summary: 'The Duke of Florence makes Bertram general of his cavalry, and Bertram eagerly accepts the honor.',
        characters: ['Duke', 'Bertram', 'Parolles', 'Lords']
      },
      '3_4': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess reads Helena\'s letter explaining that she has left on pilgrimage to the shrine of Saint Jaques (Santiago de Compostela) so that Bertram may return home. The Countess writes to Bertram, urging him to return and chiding him for driving away his virtuous wife.',
        characters: ['Countess', 'Steward']
      },
      '3_5': {
        setting: 'Florence, outside the city walls',
        summary: 'Helena, disguised as a pilgrim, encounters a Widow and her daughter Diana. They discuss the French count (Bertram) who is trying to seduce Diana. Helena reveals her identity and proposes a plan: Diana will agree to meet Bertram but Helena will take her place in the dark (the "bed-trick"). This will fulfill Bertram\'s conditions and expose his faithlessness.',
        characters: ['Helena', 'Widow', 'Diana', 'Mariana']
      },
      '3_6': {
        setting: 'The Florentine camp',
        summary: 'The French lords discuss Parolles\' false boasting and plan to expose him as a coward. They will pretend to capture him as an enemy and see if he betrays his comrades. Bertram agrees to the plan, then leaves to visit Diana. The "ambush" is set.',
        characters: ['Bertram', 'Lords Dumaine', 'Parolles', 'French soldiers']
      },
      '3_7': {
        setting: 'Florence, the Widow\'s house',
        summary: 'Helena finalizes the plan with the Widow and Diana. Diana will demand Bertram\'s ring, then arrange a midnight meeting where Helena will substitute herself in the dark.',
        characters: ['Helena', 'Widow', 'Diana']
      },
      '4_1': {
        setting: 'The Florentine camp',
        summary: 'The ambush is sprung. The lords, disguised and speaking gibberish, capture the blindfolded Parolles, who quickly agrees to betray all his comrades\' secrets to save his own skin.',
        characters: ['Lords Dumaine', 'Parolles', 'French soldiers']
      },
      '4_2': {
        setting: 'Florence, the Widow\'s house',
        summary: 'Bertram woos Diana with false promises of love. She demands his ancestral ring as proof of his devotion. Though reluctant (it\'s a family heirloom and the King gave orders never to part with it), he surrenders it. Diana agrees to a midnight meeting but insists he stay no longer than an hour and speak no words.',
        characters: ['Bertram', 'Diana']
      },
      '4_3': {
        setting: 'The Florentine camp',
        summary: 'The lords discuss news that Helena has died (a false report planted as part of her plan) and that Bertram, newly free, is returning to France. They prepare to expose Parolles. Under interrogation, the blindfolded Parolles slanders Bertram and all his comrades. When unblindfolded and confronted, Parolles is humiliated but accepts his nature: "Simply the thing I am shall make me live." Bertram departs for France.',
        characters: ['Bertram', 'Lords Dumaine', 'Parolles', 'French soldiers']
      },
      '4_4': {
        setting: 'Florence, the Widow\'s house',
        summary: 'Helena prepares to return to France with the Widow and Diana. She has Bertram\'s ring and is pregnant with his child, having fulfilled his impossible conditions through the bed-trick. They will go to the King and reveal the truth.',
        characters: ['Helena', 'Widow', 'Diana']
      },
      '4_5': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The Countess and Lafew discuss Helena\'s supposed death and Bertram\'s expected return. Lafew proposes a marriage between Bertram and his own daughter. The Countess agrees, hoping it will help her son mature. Lavatch brings news that Bertram is approaching.',
        characters: ['Countess', 'Lafew', 'Lavatch']
      },
      '5_1': {
        setting: 'Marseilles',
        summary: 'Helena, Diana, and the Widow reach Marseilles hoping to find the King, but discover he has moved to Rossillion. They hurry to follow him.',
        characters: ['Helena', 'Widow', 'Diana', 'Gentleman']
      },
      '5_2': {
        setting: 'Rossillion, before the Count\'s palace',
        summary: 'Parolles, now in rags, encounters Lavatch and begs him to deliver a petition to Lafew. Lavatch mocks him but agrees. Lafew appears and, though he scorns Parolles, offers him some charity.',
        characters: ['Parolles', 'Lavatch', 'Lafew']
      },
      '5_3': {
        setting: 'Rossillion, the Count\'s palace',
        summary: 'The King, the Countess, and Lafew discuss Helena\'s death and Bertram\'s marriage to Lafew\'s daughter. Bertram claims he now realizes he loved Helena. When he gives Lafew a ring for his daughter, the King recognizes it as one he gave Helena. Bertram gives contradictory explanations. Diana arrives and accuses Bertram of seducing and abandoning her, producing his family ring as proof. Bertram calls her a prostitute. The confusion deepens until Helena herself enters, visibly pregnant, holding Bertram\'s ring and bearing his child. She has fulfilled his conditions. Bertram, overwhelmed, accepts her. The King promises Diana a dowry and her choice of husband. The play ends with reconciliation, though Bertram\'s feelings remain somewhat ambiguous—he accepts Helena but his transformation seems sudden and perhaps incomplete.',
        characters: ['King', 'Countess', 'Lafew', 'Bertram', 'Parolles', 'Helena', 'Diana', 'Widow']
      }
    }
  }
};

export function getPlayMetadata(playId: string): PlayMetadata | null {
  // Normalize playId to match keys (replace hyphens with underscores)
  const normalizedId = playId.replace(/-/g, '_');
  return playMetadata[normalizedId] || null;
}

export function getSceneSynopsis(playId: string, act: number, scene: number): SceneSynopsis | null {
  const metadata = getPlayMetadata(playId);
  if (!metadata) return null;

  const key = `${act}_${scene}`;
  return metadata.sceneSynopses[key] || null;
}
