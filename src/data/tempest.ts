// Generated from Folger Shakespeare Library text

export interface SpeechLine {
  lineNumber: number;
  text: string;
}

export interface Speech {
  speaker: string;
  lines: SpeechLine[];
}

export interface StageDirection {
  position: number;
  text: string;
}

export interface SceneData {
  playTitle: string;
  act: number;
  scene: number;
  speeches: Speech[];
  stageDirections: StageDirection[];
  autoInsights?: { [lineNumber: number]: string };
}

const the_tempest_1_1: SceneData = {
  playTitle: 'The Tempest',
  act: 1,
  scene: 1,
  speeches: [
  {
    "speaker": "MASTER",
    "lines": [
      {
        "lineNumber": 1,
        "text": "Boatswain!"
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 2,
        "text": "Here, master. What cheer?"
      }
    ]
  },
  {
    "speaker": "MASTER",
    "lines": [
      {
        "lineNumber": 3,
        "text": "Good, speak to th' mariners. Fall to 't yarely,"
      },
      {
        "lineNumber": 4,
        "text": "or we run ourselves aground. Bestir, bestir!"
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 5,
        "text": "Heigh, my hearts! Cheerly, cheerly, my"
      },
      {
        "lineNumber": 6,
        "text": "hearts! Yare, yare! Take in the topsail. Tend to th'"
      },
      {
        "lineNumber": 7,
        "text": "Master's whistle.--Blow till thou burst thy wind, if"
      },
      {
        "lineNumber": 8,
        "text": "room enough!"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 9,
        "text": "Good boatswain, have care. Where's the Master?"
      },
      {
        "lineNumber": 10,
        "text": "Play the men."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 11,
        "text": "I pray now, keep below."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 12,
        "text": "Where is the Master, boatswain?"
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 13,
        "text": "Do you not hear him? You mar our labor."
      },
      {
        "lineNumber": 14,
        "text": "Keep your cabins. You do assist the storm."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 15,
        "text": "Nay, good, be patient."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 16,
        "text": "When the sea is. Hence! What cares these"
      },
      {
        "lineNumber": 17,
        "text": "roarers for the name of king? To cabin! Silence!"
      },
      {
        "lineNumber": 18,
        "text": "Trouble us not."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 19,
        "text": "Good, yet remember whom thou hast"
      },
      {
        "lineNumber": 20,
        "text": "aboard."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 21,
        "text": "None that I more love than myself. You are"
      },
      {
        "lineNumber": 22,
        "text": "a councillor; if you can command these elements"
      },
      {
        "lineNumber": 23,
        "text": "to silence, and work the peace of the present, we"
      },
      {
        "lineNumber": 24,
        "text": "will not hand a rope more. Use your authority. If"
      },
      {
        "lineNumber": 25,
        "text": "you cannot, give thanks you have lived so long, and"
      },
      {
        "lineNumber": 26,
        "text": "make yourself ready in your cabin for the mischance"
      },
      {
        "lineNumber": 27,
        "text": "of the hour, if it so hap.--Cheerly, good"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 28,
        "text": "I have great comfort from this fellow. Methinks"
      },
      {
        "lineNumber": 29,
        "text": "he hath no drowning mark upon him. His"
      },
      {
        "lineNumber": 30,
        "text": "complexion is perfect gallows. Stand fast, good"
      },
      {
        "lineNumber": 31,
        "text": "Fate, to his hanging. Make the rope of his destiny"
      },
      {
        "lineNumber": 32,
        "text": "our cable, for our own doth little advantage. If he be"
      },
      {
        "lineNumber": 33,
        "text": "not born to be hanged, our case is miserable."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 34,
        "text": "Down with the topmast! Yare! Lower, lower!"
      },
      {
        "lineNumber": 35,
        "text": "Bring her to try wi' th' main course. [(A cry"
      },
      {
        "lineNumber": 36,
        "text": "within.)] A plague upon this howling! They are"
      },
      {
        "lineNumber": 37,
        "text": "louder than the weather or our office."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 38,
        "text": "Yet again? What do you here? Shall we give o'er and"
      },
      {
        "lineNumber": 39,
        "text": "drown? Have you a mind to sink?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 40,
        "text": "A pox o' your throat, you bawling, blasphemous,"
      },
      {
        "lineNumber": 41,
        "text": "incharitable dog!"
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 42,
        "text": "Work you, then."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 43,
        "text": "Hang, cur, hang, you whoreson, insolent"
      },
      {
        "lineNumber": 44,
        "text": "noisemaker! We are less afraid to be drowned than"
      },
      {
        "lineNumber": 45,
        "text": "thou art."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 46,
        "text": "I'll warrant him for drowning, though the"
      },
      {
        "lineNumber": 47,
        "text": "ship were no stronger than a nutshell and as leaky"
      },
      {
        "lineNumber": 48,
        "text": "as an unstanched wench."
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 49,
        "text": "Lay her ahold, ahold! Set her two courses."
      },
      {
        "lineNumber": 50,
        "text": "Off to sea again! Lay her off!"
      }
    ]
  },
  {
    "speaker": "MARINERS",
    "lines": [
      {
        "lineNumber": 51,
        "text": "All lost! To prayers, to prayers! All lost!"
      }
    ]
  },
  {
    "speaker": "BOATSWAIN",
    "lines": [
      {
        "lineNumber": 52,
        "text": "What, must our mouths be cold?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 53,
        "text": "The King and Prince at prayers. Let's assist"
      },
      {
        "lineNumber": 54,
        "text": "them, for our case is as theirs."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 55,
        "text": "I am out of patience."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 56,
        "text": "We are merely cheated of our lives by drunkards."
      },
      {
        "lineNumber": 57,
        "text": "This wide-chopped rascal--would thou"
      },
      {
        "lineNumber": 58,
        "text": "mightst lie drowning the washing of ten tides!"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 59,
        "text": "He'll be hanged yet, though every drop of"
      },
      {
        "lineNumber": 60,
        "text": "water swear against it and gape at wid'st to glut him."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 61,
        "text": "split!\"--\"Farewell, my wife and children!\"--"
      },
      {
        "lineNumber": 62,
        "text": "\"Farewell, brother!\"--\"We split, we split, we"
      },
      {
        "lineNumber": 63,
        "text": "split!\""
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 64,
        "text": "Let's all sink wi' th' King."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 65,
        "text": "Let's take leave of him."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 66,
        "text": "Now would I give a thousand furlongs of sea"
      },
      {
        "lineNumber": 67,
        "text": "for an acre of barren ground: long heath, brown"
      },
      {
        "lineNumber": 68,
        "text": "furze, anything. The wills above be done, but I"
      },
      {
        "lineNumber": 69,
        "text": "would fain die a dry death."
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 0,
    "text": "A tempestuous noise of thunder and lightning heard"
  },
  {
    "position": 0,
    "text": "nter a Shipmaster and a Boatswain."
  },
  {
    "position": 3,
    "text": "He exits."
  },
  {
    "position": 3,
    "text": "Enter Mariners."
  },
  {
    "position": 4,
    "text": "Enter Alonso, Sebastian, Antonio, Ferdinand, Gonzalo"
  },
  {
    "position": 4,
    "text": "nd others."
  },
  {
    "position": 12,
    "text": "earts!--Out of our way, I say!\t[He exits."
  },
  {
    "position": 13,
    "text": "He exits with Alonso, Sebastian"
  },
  {
    "position": 13,
    "text": "nd the other courtiers."
  },
  {
    "position": 13,
    "text": "Enter Boatswain."
  },
  {
    "position": 14,
    "text": "Enter Sebastian, Antonio, and Gonzalo."
  },
  {
    "position": 20,
    "text": "Enter more Mariners, wet."
  },
  {
    "position": 21,
    "text": "Mariners exit."
  },
  {
    "position": 25,
    "text": "Boatswain exits."
  },
  {
    "position": 26,
    "text": "A confused noise within:]  \"Mercy on us!\"--\"We split, w"
  },
  {
    "position": 29,
    "text": "He exits with Antonio."
  },
  {
    "position": 30,
    "text": "He exits."
  }
],
  autoInsights: {}
};

const the_tempest_1_2: SceneData = {
  playTitle: 'The Tempest',
  act: 1,
  scene: 2,
  speeches: [
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 2,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 3,
        "text": "If by your art, my dearest father, you have"
      },
      {
        "lineNumber": 4,
        "text": "Put the wild waters in this roar, allay them."
      },
      {
        "lineNumber": 5,
        "text": "The sky, it seems, would pour down stinking pitch,"
      },
      {
        "lineNumber": 6,
        "text": "But that the sea, mounting to th' welkin's cheek,"
      },
      {
        "lineNumber": 7,
        "text": "Dashes the fire out. O, I have suffered"
      },
      {
        "lineNumber": 8,
        "text": "With those that I saw suffer! A brave vessel,"
      },
      {
        "lineNumber": 9,
        "text": "Who had, no doubt, some noble creature in her,"
      },
      {
        "lineNumber": 10,
        "text": "Dashed all to pieces. O, the cry did knock"
      },
      {
        "lineNumber": 11,
        "text": "Against my very heart! Poor souls, they perished."
      },
      {
        "lineNumber": 12,
        "text": "Had I been any god of power, I would"
      },
      {
        "lineNumber": 13,
        "text": "Have sunk the sea within the earth or ere"
      },
      {
        "lineNumber": 14,
        "text": "It should the good ship so have swallowed, and"
      },
      {
        "lineNumber": 15,
        "text": "The fraughting souls within her."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 16,
        "text": "Be collected."
      },
      {
        "lineNumber": 17,
        "text": "No more amazement. Tell your piteous heart"
      },
      {
        "lineNumber": 18,
        "text": "There's no harm done."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 19,
        "text": "O, woe the day!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 20,
        "text": "No harm."
      },
      {
        "lineNumber": 21,
        "text": "I have done nothing but in care of thee,"
      },
      {
        "lineNumber": 22,
        "text": "Of thee, my dear one, thee, my daughter, who"
      },
      {
        "lineNumber": 23,
        "text": "Art ignorant of what thou art, naught knowing"
      },
      {
        "lineNumber": 24,
        "text": "Of whence I am, nor that I am more better"
      },
      {
        "lineNumber": 25,
        "text": "Than Prospero, master of a full poor cell,"
      },
      {
        "lineNumber": 26,
        "text": "And thy no greater father."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 27,
        "text": "More to know"
      },
      {
        "lineNumber": 28,
        "text": "Did never meddle with my thoughts."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 29,
        "text": "'Tis time"
      },
      {
        "lineNumber": 30,
        "text": "I should inform thee farther. Lend thy hand"
      },
      {
        "lineNumber": 31,
        "text": "And pluck my magic garment from me."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 32,
        "text": "So,"
      },
      {
        "lineNumber": 33,
        "text": "Lie there, my art.--Wipe thou thine eyes. Have"
      },
      {
        "lineNumber": 34,
        "text": "comfort."
      },
      {
        "lineNumber": 35,
        "text": "The direful spectacle of the wrack, which touched"
      },
      {
        "lineNumber": 36,
        "text": "The very virtue of compassion in thee,"
      },
      {
        "lineNumber": 37,
        "text": "I have with such provision in mine art"
      },
      {
        "lineNumber": 38,
        "text": "So safely ordered that there is no soul--"
      },
      {
        "lineNumber": 39,
        "text": "No, not so much perdition as an hair,"
      },
      {
        "lineNumber": 40,
        "text": "Betid to any creature in the vessel"
      },
      {
        "lineNumber": 41,
        "text": "Which thou heard'st cry, which thou saw'st sink. Sit"
      },
      {
        "lineNumber": 42,
        "text": "down,"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 43,
        "text": "You have often"
      },
      {
        "lineNumber": 44,
        "text": "Begun to tell me what I am, but stopped"
      },
      {
        "lineNumber": 45,
        "text": "And left me to a bootless inquisition,"
      },
      {
        "lineNumber": 46,
        "text": "Concluding \"Stay. Not yet.\""
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 47,
        "text": "The hour's now come."
      },
      {
        "lineNumber": 48,
        "text": "The very minute bids thee ope thine ear."
      },
      {
        "lineNumber": 49,
        "text": "Obey, and be attentive. Canst thou remember"
      },
      {
        "lineNumber": 50,
        "text": "A time before we came unto this cell?"
      },
      {
        "lineNumber": 51,
        "text": "I do not think thou canst, for then thou wast not"
      },
      {
        "lineNumber": 52,
        "text": "Out three years old."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 53,
        "text": "Certainly, sir, I can."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 54,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 55,
        "text": "By what? By any other house or person?"
      },
      {
        "lineNumber": 56,
        "text": "Of anything the image tell me that"
      },
      {
        "lineNumber": 57,
        "text": "Hath kept with thy remembrance."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 58,
        "text": "'Tis far off"
      },
      {
        "lineNumber": 59,
        "text": "And rather like a dream than an assurance"
      },
      {
        "lineNumber": 60,
        "text": "That my remembrance warrants. Had I not"
      },
      {
        "lineNumber": 61,
        "text": "Four or five women once that tended me?"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 62,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 63,
        "text": "Thou hadst, and more, Miranda. But how is it"
      },
      {
        "lineNumber": 64,
        "text": "That this lives in thy mind? What seest thou else"
      },
      {
        "lineNumber": 65,
        "text": "In the dark backward and abysm of time?"
      },
      {
        "lineNumber": 66,
        "text": "If thou rememb'rest aught ere thou cam'st here,"
      },
      {
        "lineNumber": 67,
        "text": "How thou cam'st here thou mayst."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 68,
        "text": "But that I do not."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 69,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 70,
        "text": "Twelve year since, Miranda, twelve year since,"
      },
      {
        "lineNumber": 71,
        "text": "Thy father was the Duke of Milan and"
      },
      {
        "lineNumber": 72,
        "text": "A prince of power."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 73,
        "text": "Sir, are not you my father?"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 74,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 75,
        "text": "Thy mother was a piece of virtue, and"
      },
      {
        "lineNumber": 76,
        "text": "She said thou wast my daughter. And thy father"
      },
      {
        "lineNumber": 77,
        "text": "Was Duke of Milan, and his only heir"
      },
      {
        "lineNumber": 78,
        "text": "And princess no worse issued."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 79,
        "text": "O, the heavens!"
      },
      {
        "lineNumber": 80,
        "text": "What foul play had we that we came from thence?"
      },
      {
        "lineNumber": 81,
        "text": "Or blessed was 't we did?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 82,
        "text": "Both, both, my girl."
      },
      {
        "lineNumber": 83,
        "text": "By foul play, as thou sayst, were we heaved thence,"
      },
      {
        "lineNumber": 84,
        "text": "But blessedly holp hither."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 85,
        "text": "O, my heart bleeds"
      },
      {
        "lineNumber": 86,
        "text": "To think o' th' teen that I have turned you to,"
      },
      {
        "lineNumber": 87,
        "text": "Which is from my remembrance. Please you,"
      },
      {
        "lineNumber": 88,
        "text": "farther."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 89,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 90,
        "text": "My brother and thy uncle, called Antonio--"
      },
      {
        "lineNumber": 91,
        "text": "I pray thee, mark me--that a brother should"
      },
      {
        "lineNumber": 92,
        "text": "Be so perfidious!--he whom next thyself"
      },
      {
        "lineNumber": 93,
        "text": "Of all the world I loved, and to him put"
      },
      {
        "lineNumber": 94,
        "text": "The manage of my state, as at that time"
      },
      {
        "lineNumber": 95,
        "text": "Through all the signories it was the first,"
      },
      {
        "lineNumber": 96,
        "text": "And Prospero the prime duke, being so reputed"
      },
      {
        "lineNumber": 97,
        "text": "In dignity, and for the liberal arts"
      },
      {
        "lineNumber": 98,
        "text": "Without a parallel. Those being all my study,"
      },
      {
        "lineNumber": 99,
        "text": "The government I cast upon my brother"
      },
      {
        "lineNumber": 100,
        "text": "And to my state grew stranger, being transported"
      },
      {
        "lineNumber": 101,
        "text": "And rapt in secret studies. Thy false uncle--"
      },
      {
        "lineNumber": 102,
        "text": "Dost thou attend me?"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 103,
        "text": "Sir, most heedfully."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 104,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 105,
        "text": "Being once perfected how to grant suits,"
      },
      {
        "lineNumber": 106,
        "text": "How to deny them, who t' advance, and who"
      },
      {
        "lineNumber": 107,
        "text": "To trash for overtopping, new created"
      },
      {
        "lineNumber": 108,
        "text": "The creatures that were mine, I say, or changed 'em,"
      },
      {
        "lineNumber": 109,
        "text": "Or else new formed 'em, having both the key"
      },
      {
        "lineNumber": 110,
        "text": "Of officer and office, set all hearts i' th' state"
      },
      {
        "lineNumber": 111,
        "text": "To what tune pleased his ear, that now he was"
      },
      {
        "lineNumber": 112,
        "text": "The ivy which had hid my princely trunk"
      },
      {
        "lineNumber": 113,
        "text": "And sucked my verdure out on 't. Thou attend'st not."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 114,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 115,
        "text": "O, good sir, I do."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 116,
        "text": "I pray thee, mark me."
      },
      {
        "lineNumber": 117,
        "text": "I, thus neglecting worldly ends, all dedicated"
      },
      {
        "lineNumber": 118,
        "text": "To closeness and the bettering of my mind"
      },
      {
        "lineNumber": 119,
        "text": "With that which, but by being so retired,"
      },
      {
        "lineNumber": 120,
        "text": "O'erprized all popular rate, in my false brother"
      },
      {
        "lineNumber": 121,
        "text": "Awaked an evil nature, and my trust,"
      },
      {
        "lineNumber": 122,
        "text": "Like a good parent, did beget of him"
      },
      {
        "lineNumber": 123,
        "text": "A falsehood in its contrary as great"
      },
      {
        "lineNumber": 124,
        "text": "As my trust was, which had indeed no limit,"
      },
      {
        "lineNumber": 125,
        "text": "A confidence sans bound. He being thus lorded,"
      },
      {
        "lineNumber": 126,
        "text": "Not only with what my revenue yielded"
      },
      {
        "lineNumber": 127,
        "text": "But what my power might else exact, like one"
      },
      {
        "lineNumber": 128,
        "text": "Who, having into truth by telling of it,"
      },
      {
        "lineNumber": 129,
        "text": "Made such a sinner of his memory"
      },
      {
        "lineNumber": 130,
        "text": "To credit his own lie, he did believe"
      },
      {
        "lineNumber": 131,
        "text": "He was indeed the Duke, out o' th' substitution"
      },
      {
        "lineNumber": 132,
        "text": "And executing th' outward face of royalty"
      },
      {
        "lineNumber": 133,
        "text": "With all prerogative. Hence, his ambition growing--"
      },
      {
        "lineNumber": 134,
        "text": "Dost thou hear?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 135,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 136,
        "text": "Your tale, sir, would cure deafness."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 137,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 138,
        "text": "To have no screen between this part he played"
      },
      {
        "lineNumber": 139,
        "text": "And him he played it for, he needs will be"
      },
      {
        "lineNumber": 140,
        "text": "Absolute Milan. Me, poor man, my library"
      },
      {
        "lineNumber": 141,
        "text": "Was dukedom large enough. Of temporal royalties"
      },
      {
        "lineNumber": 142,
        "text": "He thinks me now incapable; confederates,"
      },
      {
        "lineNumber": 143,
        "text": "So dry he was for sway, wi' th' King of Naples"
      },
      {
        "lineNumber": 144,
        "text": "To give him annual tribute, do him homage,"
      },
      {
        "lineNumber": 145,
        "text": "Subject his coronet to his crown, and bend"
      },
      {
        "lineNumber": 146,
        "text": "The dukedom, yet unbowed--alas, poor Milan!--"
      },
      {
        "lineNumber": 147,
        "text": "To most ignoble stooping."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 148,
        "text": "O, the heavens!"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 149,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 150,
        "text": "Mark his condition and th' event. Then tell me"
      },
      {
        "lineNumber": 151,
        "text": "If this might be a brother."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 152,
        "text": "I should sin"
      },
      {
        "lineNumber": 153,
        "text": "To think but nobly of my grandmother."
      },
      {
        "lineNumber": 154,
        "text": "Good wombs have borne bad sons."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 155,
        "text": "Now the condition."
      },
      {
        "lineNumber": 156,
        "text": "This King of Naples, being an enemy"
      },
      {
        "lineNumber": 157,
        "text": "To me inveterate, hearkens my brother's suit,"
      },
      {
        "lineNumber": 158,
        "text": "Which was that he, in lieu o' th' premises"
      },
      {
        "lineNumber": 159,
        "text": "Of homage and I know not how much tribute,"
      },
      {
        "lineNumber": 160,
        "text": "Should presently extirpate me and mine"
      },
      {
        "lineNumber": 161,
        "text": "Out of the dukedom, and confer fair Milan,"
      },
      {
        "lineNumber": 162,
        "text": "With all the honors, on my brother; whereon,"
      },
      {
        "lineNumber": 163,
        "text": "A treacherous army levied, one midnight"
      },
      {
        "lineNumber": 164,
        "text": "Fated to th' purpose did Antonio open"
      },
      {
        "lineNumber": 165,
        "text": "The gates of Milan, and i' th' dead of darkness"
      },
      {
        "lineNumber": 166,
        "text": "The ministers for th' purpose hurried thence"
      },
      {
        "lineNumber": 167,
        "text": "Me and thy crying self."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 168,
        "text": "Alack, for pity!"
      },
      {
        "lineNumber": 169,
        "text": "I, not rememb'ring how I cried out then,"
      },
      {
        "lineNumber": 170,
        "text": "Will cry it o'er again. It is a hint"
      },
      {
        "lineNumber": 171,
        "text": "That wrings mine eyes to 't."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 172,
        "text": "Hear a little further,"
      },
      {
        "lineNumber": 173,
        "text": "And then I'll bring thee to the present business"
      },
      {
        "lineNumber": 174,
        "text": "Which now 's upon 's, without the which this story"
      },
      {
        "lineNumber": 175,
        "text": "Were most impertinent."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 176,
        "text": "Wherefore did they not"
      },
      {
        "lineNumber": 177,
        "text": "That hour destroy us?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 178,
        "text": "Well demanded, wench."
      },
      {
        "lineNumber": 179,
        "text": "My tale provokes that question. Dear, they durst not,"
      },
      {
        "lineNumber": 180,
        "text": "So dear the love my people bore me, nor set"
      },
      {
        "lineNumber": 181,
        "text": "A mark so bloody on the business, but"
      },
      {
        "lineNumber": 182,
        "text": "With colors fairer painted their foul ends."
      },
      {
        "lineNumber": 183,
        "text": "In few, they hurried us aboard a bark,"
      },
      {
        "lineNumber": 184,
        "text": "Bore us some leagues to sea, where they prepared"
      },
      {
        "lineNumber": 185,
        "text": "A rotten carcass of a butt, not rigged,"
      },
      {
        "lineNumber": 186,
        "text": "Nor tackle, sail, nor mast; the very rats"
      },
      {
        "lineNumber": 187,
        "text": "Instinctively have quit it. There they hoist us"
      },
      {
        "lineNumber": 188,
        "text": "To cry to th' sea that roared to us, to sigh"
      },
      {
        "lineNumber": 189,
        "text": "To th' winds, whose pity, sighing back again,"
      },
      {
        "lineNumber": 190,
        "text": "Did us but loving wrong."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 191,
        "text": "Alack, what trouble"
      },
      {
        "lineNumber": 192,
        "text": "Was I then to you!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 193,
        "text": "O, a cherubin"
      },
      {
        "lineNumber": 194,
        "text": "Thou wast that did preserve me. Thou didst smile,"
      },
      {
        "lineNumber": 195,
        "text": "Infused with a fortitude from heaven,"
      },
      {
        "lineNumber": 196,
        "text": "When I have decked the sea with drops full salt,"
      },
      {
        "lineNumber": 197,
        "text": "Under my burden groaned, which raised in me"
      },
      {
        "lineNumber": 198,
        "text": "An undergoing stomach to bear up"
      },
      {
        "lineNumber": 199,
        "text": "Against what should ensue."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 200,
        "text": "How came we ashore?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 201,
        "text": "By providence divine."
      },
      {
        "lineNumber": 202,
        "text": "Some food we had, and some fresh water, that"
      },
      {
        "lineNumber": 203,
        "text": "A noble Neapolitan, Gonzalo,"
      },
      {
        "lineNumber": 204,
        "text": "Out of his charity, who being then appointed"
      },
      {
        "lineNumber": 205,
        "text": "Master of this design, did give us, with"
      },
      {
        "lineNumber": 206,
        "text": "Rich garments, linens, stuffs, and necessaries,"
      },
      {
        "lineNumber": 207,
        "text": "Which since have steaded much. So, of his"
      },
      {
        "lineNumber": 208,
        "text": "gentleness,"
      },
      {
        "lineNumber": 209,
        "text": "Knowing I loved my books, he furnished me"
      },
      {
        "lineNumber": 210,
        "text": "From mine own library with volumes that"
      },
      {
        "lineNumber": 211,
        "text": "I prize above my dukedom."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 212,
        "text": "Would I might"
      },
      {
        "lineNumber": 213,
        "text": "But ever see that man."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 214,
        "text": "PROSPERO, [standing]  Now I arise."
      },
      {
        "lineNumber": 215,
        "text": "Sit still, and hear the last of our sea-sorrow."
      },
      {
        "lineNumber": 216,
        "text": "Here in this island we arrived, and here"
      },
      {
        "lineNumber": 217,
        "text": "Have I, thy schoolmaster, made thee more profit"
      },
      {
        "lineNumber": 218,
        "text": "Than other princes can, that have more time"
      },
      {
        "lineNumber": 219,
        "text": "For vainer hours and tutors not so careful."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 220,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 221,
        "text": "Heavens thank you for 't. And now I pray you, sir--"
      },
      {
        "lineNumber": 222,
        "text": "For still 'tis beating in my mind--your reason"
      },
      {
        "lineNumber": 223,
        "text": "For raising this sea storm?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 224,
        "text": "Know thus far forth:"
      },
      {
        "lineNumber": 225,
        "text": "By accident most strange, bountiful Fortune,"
      },
      {
        "lineNumber": 226,
        "text": "Now my dear lady, hath mine enemies"
      },
      {
        "lineNumber": 227,
        "text": "Brought to this shore; and by my prescience"
      },
      {
        "lineNumber": 228,
        "text": "I find my zenith doth depend upon"
      },
      {
        "lineNumber": 229,
        "text": "A most auspicious star, whose influence"
      },
      {
        "lineNumber": 230,
        "text": "If now I court not, but omit, my fortunes"
      },
      {
        "lineNumber": 231,
        "text": "Will ever after droop. Here cease more questions."
      },
      {
        "lineNumber": 232,
        "text": "Thou art inclined to sleep. 'Tis a good dullness,"
      },
      {
        "lineNumber": 233,
        "text": "And give it way. I know thou canst not choose."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 234,
        "text": "Come away, servant, come. I am ready now."
      },
      {
        "lineNumber": 235,
        "text": "Approach, my Ariel. Come."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 236,
        "text": "ARIEL"
      },
      {
        "lineNumber": 237,
        "text": "All hail, great master! Grave sir, hail! I come"
      },
      {
        "lineNumber": 238,
        "text": "To answer thy best pleasure. Be 't to fly,"
      },
      {
        "lineNumber": 239,
        "text": "To swim, to dive into the fire, to ride"
      },
      {
        "lineNumber": 240,
        "text": "On the curled clouds, to thy strong bidding task"
      },
      {
        "lineNumber": 241,
        "text": "Ariel and all his quality."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 242,
        "text": "Hast thou, spirit,"
      },
      {
        "lineNumber": 243,
        "text": "Performed to point the tempest that I bade thee?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 244,
        "text": "To every article."
      },
      {
        "lineNumber": 245,
        "text": "I boarded the King's ship; now on the beak,"
      },
      {
        "lineNumber": 246,
        "text": "Now in the waist, the deck, in every cabin,"
      },
      {
        "lineNumber": 247,
        "text": "I flamed amazement. Sometimes I'd divide"
      },
      {
        "lineNumber": 248,
        "text": "And burn in many places. On the topmast,"
      },
      {
        "lineNumber": 249,
        "text": "The yards, and bowsprit would I flame distinctly,"
      },
      {
        "lineNumber": 250,
        "text": "Then meet and join. Jove's lightning, the precursors"
      },
      {
        "lineNumber": 251,
        "text": "O' th' dreadful thunderclaps, more momentary"
      },
      {
        "lineNumber": 252,
        "text": "And sight-outrunning were not. The fire and cracks"
      },
      {
        "lineNumber": 253,
        "text": "Of sulfurous roaring the most mighty Neptune"
      },
      {
        "lineNumber": 254,
        "text": "Seem to besiege and make his bold waves tremble,"
      },
      {
        "lineNumber": 255,
        "text": "Yea, his dread trident shake."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 256,
        "text": "My brave spirit!"
      },
      {
        "lineNumber": 257,
        "text": "Who was so firm, so constant, that this coil"
      },
      {
        "lineNumber": 258,
        "text": "Would not infect his reason?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 259,
        "text": "Not a soul"
      },
      {
        "lineNumber": 260,
        "text": "But felt a fever of the mad, and played"
      },
      {
        "lineNumber": 261,
        "text": "Some tricks of desperation. All but mariners"
      },
      {
        "lineNumber": 262,
        "text": "Plunged in the foaming brine and quit the vessel,"
      },
      {
        "lineNumber": 263,
        "text": "Then all afire with me. The King's son, Ferdinand,"
      },
      {
        "lineNumber": 264,
        "text": "With hair up-staring--then like reeds, not hair--"
      },
      {
        "lineNumber": 265,
        "text": "Was the first man that leaped; cried \"Hell is empty,"
      },
      {
        "lineNumber": 266,
        "text": "And all the devils are here.\""
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 267,
        "text": "Why, that's my spirit!"
      },
      {
        "lineNumber": 268,
        "text": "But was not this nigh shore?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 269,
        "text": "Close by, my master."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 270,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 271,
        "text": "But are they, Ariel, safe?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 272,
        "text": "Not a hair perished."
      },
      {
        "lineNumber": 273,
        "text": "On their sustaining garments not a blemish,"
      },
      {
        "lineNumber": 274,
        "text": "But fresher than before; and, as thou bad'st me,"
      },
      {
        "lineNumber": 275,
        "text": "In troops I have dispersed them 'bout the isle."
      },
      {
        "lineNumber": 276,
        "text": "The King's son have I landed by himself,"
      },
      {
        "lineNumber": 277,
        "text": "Whom I left cooling of the air with sighs"
      },
      {
        "lineNumber": 278,
        "text": "In an odd angle of the isle, and sitting,"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 279,
        "text": "Of the King's ship,"
      },
      {
        "lineNumber": 280,
        "text": "The mariners say how thou hast disposed,"
      },
      {
        "lineNumber": 281,
        "text": "And all the rest o' th' fleet."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 282,
        "text": "Safely in harbor"
      },
      {
        "lineNumber": 283,
        "text": "Is the King's ship. In the deep nook, where once"
      },
      {
        "lineNumber": 284,
        "text": "Thou called'st me up at midnight to fetch dew"
      },
      {
        "lineNumber": 285,
        "text": "From the still-vexed Bermoothes, there she's hid;"
      },
      {
        "lineNumber": 286,
        "text": "The mariners all under hatches stowed,"
      },
      {
        "lineNumber": 287,
        "text": "Who, with a charm joined to their suffered labor,"
      },
      {
        "lineNumber": 288,
        "text": "I have left asleep. And for the rest o' th' fleet,"
      },
      {
        "lineNumber": 289,
        "text": "Which I dispersed, they all have met again"
      },
      {
        "lineNumber": 290,
        "text": "And are upon the Mediterranean float,"
      },
      {
        "lineNumber": 291,
        "text": "Bound sadly home for Naples,"
      },
      {
        "lineNumber": 292,
        "text": "Supposing that they saw the King's ship wracked"
      },
      {
        "lineNumber": 293,
        "text": "And his great person perish."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 294,
        "text": "Ariel, thy charge"
      },
      {
        "lineNumber": 295,
        "text": "Exactly is performed. But there's more work."
      },
      {
        "lineNumber": 296,
        "text": "What is the time o' th' day?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 297,
        "text": "Past the mid season."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 298,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 299,
        "text": "At least two glasses. The time 'twixt six and now"
      },
      {
        "lineNumber": 300,
        "text": "Must by us both be spent most preciously."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 301,
        "text": "ARIEL"
      },
      {
        "lineNumber": 302,
        "text": "Is there more toil? Since thou dost give me pains,"
      },
      {
        "lineNumber": 303,
        "text": "Let me remember thee what thou hast promised,"
      },
      {
        "lineNumber": 304,
        "text": "Which is not yet performed me."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 305,
        "text": "How now? Moody?"
      },
      {
        "lineNumber": 306,
        "text": "What is 't thou canst demand?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 307,
        "text": "My liberty."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 308,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 309,
        "text": "Before the time be out? No more."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 310,
        "text": "I prithee,"
      },
      {
        "lineNumber": 311,
        "text": "Remember I have done thee worthy service,"
      },
      {
        "lineNumber": 312,
        "text": "Told thee no lies, made no mistakings, served"
      },
      {
        "lineNumber": 313,
        "text": "Without or grudge or grumblings. Thou did promise"
      },
      {
        "lineNumber": 314,
        "text": "To bate me a full year."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 315,
        "text": "Dost thou forget"
      },
      {
        "lineNumber": 316,
        "text": "From what a torment I did free thee?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 317,
        "text": "No."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 318,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 319,
        "text": "Thou dost, and think'st it much to tread the ooze"
      },
      {
        "lineNumber": 320,
        "text": "Of the salt deep,"
      },
      {
        "lineNumber": 321,
        "text": "To run upon the sharp wind of the North,"
      },
      {
        "lineNumber": 322,
        "text": "To do me business in the veins o' th' Earth"
      },
      {
        "lineNumber": 323,
        "text": "When it is baked with frost."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 324,
        "text": "I do not, sir."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 325,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 326,
        "text": "Thou liest, malignant thing. Hast thou forgot"
      },
      {
        "lineNumber": 327,
        "text": "The foul witch Sycorax, who with age and envy"
      },
      {
        "lineNumber": 328,
        "text": "Was grown into a hoop? Hast thou forgot her?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 329,
        "text": "No, sir."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 330,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 331,
        "text": "Thou hast. Where was she born? Speak. Tell me."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 332,
        "text": "ARIEL"
      },
      {
        "lineNumber": 333,
        "text": "Sir, in Argier."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 334,
        "text": "O, was she so? I must"
      },
      {
        "lineNumber": 335,
        "text": "Once in a month recount what thou hast been,"
      },
      {
        "lineNumber": 336,
        "text": "Which thou forget'st. This damned witch Sycorax,"
      },
      {
        "lineNumber": 337,
        "text": "For mischiefs manifold, and sorceries terrible"
      },
      {
        "lineNumber": 338,
        "text": "To enter human hearing, from Argier,"
      },
      {
        "lineNumber": 339,
        "text": "Thou know'st, was banished. For one thing she did"
      },
      {
        "lineNumber": 340,
        "text": "They would not take her life. Is not this true?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 341,
        "text": "Ay, sir."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 342,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 343,
        "text": "This blue-eyed hag was hither brought with child"
      },
      {
        "lineNumber": 344,
        "text": "And here was left by th' sailors. Thou, my slave,"
      },
      {
        "lineNumber": 345,
        "text": "As thou report'st thyself, was then her servant,"
      },
      {
        "lineNumber": 346,
        "text": "And for thou wast a spirit too delicate"
      },
      {
        "lineNumber": 347,
        "text": "To act her earthy and abhorred commands,"
      },
      {
        "lineNumber": 348,
        "text": "Refusing her grand hests, she did confine thee,"
      },
      {
        "lineNumber": 349,
        "text": "By help of her more potent ministers"
      },
      {
        "lineNumber": 350,
        "text": "And in her most unmitigable rage,"
      },
      {
        "lineNumber": 351,
        "text": "Into a cloven pine, within which rift"
      },
      {
        "lineNumber": 352,
        "text": "Imprisoned thou didst painfully remain"
      },
      {
        "lineNumber": 353,
        "text": "A dozen years; within which space she died"
      },
      {
        "lineNumber": 354,
        "text": "And left thee there, where thou didst vent thy groans"
      },
      {
        "lineNumber": 355,
        "text": "As fast as mill wheels strike. Then was this island"
      },
      {
        "lineNumber": 356,
        "text": "(Save for the son that she did litter here,"
      },
      {
        "lineNumber": 357,
        "text": "A freckled whelp, hag-born) not honored with"
      },
      {
        "lineNumber": 358,
        "text": "A human shape."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 359,
        "text": "Yes, Caliban, her son."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 360,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 361,
        "text": "Dull thing, I say so; he, that Caliban"
      },
      {
        "lineNumber": 362,
        "text": "Whom now I keep in service. Thou best know'st"
      },
      {
        "lineNumber": 363,
        "text": "What torment I did find thee in. Thy groans"
      },
      {
        "lineNumber": 364,
        "text": "Did make wolves howl, and penetrate the breasts"
      },
      {
        "lineNumber": 365,
        "text": "Of ever-angry bears. It was a torment"
      },
      {
        "lineNumber": 366,
        "text": "To lay upon the damned, which Sycorax"
      },
      {
        "lineNumber": 367,
        "text": "Could not again undo. It was mine art,"
      },
      {
        "lineNumber": 368,
        "text": "When I arrived and heard thee, that made gape"
      },
      {
        "lineNumber": 369,
        "text": "The pine and let thee out."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 370,
        "text": "I thank thee, master."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 371,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 372,
        "text": "If thou more murmur'st, I will rend an oak"
      },
      {
        "lineNumber": 373,
        "text": "And peg thee in his knotty entrails till"
      },
      {
        "lineNumber": 374,
        "text": "Thou hast howled away twelve winters."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 375,
        "text": "Pardon, master."
      },
      {
        "lineNumber": 376,
        "text": "I will be correspondent to command"
      },
      {
        "lineNumber": 377,
        "text": "And do my spriting gently."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 378,
        "text": "Do so, and after two days"
      },
      {
        "lineNumber": 379,
        "text": "I will discharge thee."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 380,
        "text": "That's my noble master."
      },
      {
        "lineNumber": 381,
        "text": "What shall I do? Say, what? What shall I do?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 382,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 383,
        "text": "Go make thyself like a nymph o' th' sea. Be subject"
      },
      {
        "lineNumber": 384,
        "text": "To no sight but thine and mine, invisible"
      },
      {
        "lineNumber": 385,
        "text": "To every eyeball else. Go, take this shape,"
      },
      {
        "lineNumber": 386,
        "text": "And hither come in 't. Go, hence with diligence!"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 387,
        "text": "Awake, dear heart, awake. Thou hast slept well."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 388,
        "text": "The strangeness of your story put"
      },
      {
        "lineNumber": 389,
        "text": "Heaviness in me."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 390,
        "text": "Shake it off. Come on,"
      },
      {
        "lineNumber": 391,
        "text": "We'll visit Caliban, my slave, who never"
      },
      {
        "lineNumber": 392,
        "text": "Yields us kind answer."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 393,
        "text": "MIRANDA, [rising]  'Tis a villain, sir,"
      },
      {
        "lineNumber": 394,
        "text": "I do not love to look on."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 395,
        "text": "But, as 'tis,"
      },
      {
        "lineNumber": 396,
        "text": "We cannot miss him. He does make our fire,"
      },
      {
        "lineNumber": 397,
        "text": "Fetch in our wood, and serves in offices"
      },
      {
        "lineNumber": 398,
        "text": "That profit us.--What ho, slave, Caliban!"
      },
      {
        "lineNumber": 399,
        "text": "Thou earth, thou, speak!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 400,
        "text": "CALIBAN, [within]  There's wood enough within."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 401,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 402,
        "text": "Come forth, I say. There's other business for thee."
      },
      {
        "lineNumber": 403,
        "text": "Come, thou tortoise. When?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 404,
        "text": "Fine apparition! My quaint Ariel,"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 405,
        "text": "Thou poisonous slave, got by the devil himself"
      },
      {
        "lineNumber": 406,
        "text": "Upon thy wicked dam, come forth!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 407,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 408,
        "text": "As wicked dew as e'er my mother brushed"
      },
      {
        "lineNumber": 409,
        "text": "With raven's feather from unwholesome fen"
      },
      {
        "lineNumber": 410,
        "text": "Drop on you both. A southwest blow on you"
      },
      {
        "lineNumber": 411,
        "text": "And blister you all o'er."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 412,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 413,
        "text": "For this, be sure, tonight thou shalt have cramps,"
      },
      {
        "lineNumber": 414,
        "text": "Side-stitches that shall pen thy breath up. Urchins"
      },
      {
        "lineNumber": 415,
        "text": "Shall forth at vast of night that they may work"
      },
      {
        "lineNumber": 416,
        "text": "All exercise on thee. Thou shalt be pinched"
      },
      {
        "lineNumber": 417,
        "text": "As thick as honeycomb, each pinch more stinging"
      },
      {
        "lineNumber": 418,
        "text": "Than bees that made 'em."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 419,
        "text": "I must eat my dinner."
      },
      {
        "lineNumber": 420,
        "text": "This island's mine by Sycorax, my mother,"
      },
      {
        "lineNumber": 421,
        "text": "Which thou tak'st from me. When thou cam'st first,"
      },
      {
        "lineNumber": 422,
        "text": "Thou strok'st me and made much of me, wouldst"
      },
      {
        "lineNumber": 423,
        "text": "give me"
      },
      {
        "lineNumber": 424,
        "text": "Water with berries in 't, and teach me how"
      },
      {
        "lineNumber": 425,
        "text": "To name the bigger light and how the less,"
      },
      {
        "lineNumber": 426,
        "text": "That burn by day and night. And then I loved thee,"
      },
      {
        "lineNumber": 427,
        "text": "And showed thee all the qualities o' th' isle,"
      },
      {
        "lineNumber": 428,
        "text": "The fresh springs, brine pits, barren place and"
      },
      {
        "lineNumber": 429,
        "text": "fertile."
      },
      {
        "lineNumber": 430,
        "text": "Cursed be I that did so! All the charms"
      },
      {
        "lineNumber": 431,
        "text": "Of Sycorax, toads, beetles, bats, light on you,"
      },
      {
        "lineNumber": 432,
        "text": "For I am all the subjects that you have,"
      },
      {
        "lineNumber": 433,
        "text": "Which first was mine own king; and here you sty me"
      },
      {
        "lineNumber": 434,
        "text": "In this hard rock, whiles you do keep from me"
      },
      {
        "lineNumber": 435,
        "text": "The rest o' th' island."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 436,
        "text": "Thou most lying slave,"
      },
      {
        "lineNumber": 437,
        "text": "Whom stripes may move, not kindness, I have used"
      },
      {
        "lineNumber": 438,
        "text": "thee,"
      },
      {
        "lineNumber": 439,
        "text": "Filth as thou art, with humane care, and lodged"
      },
      {
        "lineNumber": 440,
        "text": "thee"
      },
      {
        "lineNumber": 441,
        "text": "In mine own cell, till thou didst seek to violate"
      },
      {
        "lineNumber": 442,
        "text": "The honor of my child."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 443,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 444,
        "text": "O ho, O ho! Would 't had been done!"
      },
      {
        "lineNumber": 445,
        "text": "Thou didst prevent me. I had peopled else"
      },
      {
        "lineNumber": 446,
        "text": "This isle with Calibans."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 447,
        "text": "Abhorred slave,"
      },
      {
        "lineNumber": 448,
        "text": "Which any print of goodness wilt not take,"
      },
      {
        "lineNumber": 449,
        "text": "Being capable of all ill! I pitied thee,"
      },
      {
        "lineNumber": 450,
        "text": "Took pains to make thee speak, taught thee each"
      },
      {
        "lineNumber": 451,
        "text": "hour"
      },
      {
        "lineNumber": 452,
        "text": "One thing or other. When thou didst not, savage,"
      },
      {
        "lineNumber": 453,
        "text": "Know thine own meaning, but wouldst gabble like"
      },
      {
        "lineNumber": 454,
        "text": "A thing most brutish, I endowed thy purposes"
      },
      {
        "lineNumber": 455,
        "text": "With words that made them known. But thy vile"
      },
      {
        "lineNumber": 456,
        "text": "race,"
      },
      {
        "lineNumber": 457,
        "text": "Though thou didst learn, had that in 't which good"
      },
      {
        "lineNumber": 458,
        "text": "natures"
      },
      {
        "lineNumber": 459,
        "text": "Could not abide to be with. Therefore wast thou"
      },
      {
        "lineNumber": 460,
        "text": "Deservedly confined into this rock,"
      },
      {
        "lineNumber": 461,
        "text": "Who hadst deserved more than a prison."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 462,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 463,
        "text": "You taught me language, and my profit on 't"
      },
      {
        "lineNumber": 464,
        "text": "Is I know how to curse. The red plague rid you"
      },
      {
        "lineNumber": 465,
        "text": "For learning me your language!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 466,
        "text": "Hagseed, hence!"
      },
      {
        "lineNumber": 467,
        "text": "Fetch us in fuel; and be quick, thou 'rt best,"
      },
      {
        "lineNumber": 468,
        "text": "To answer other business. Shrugg'st thou, malice?"
      },
      {
        "lineNumber": 469,
        "text": "If thou neglect'st or dost unwillingly"
      },
      {
        "lineNumber": 470,
        "text": "What I command, I'll rack thee with old cramps,"
      },
      {
        "lineNumber": 471,
        "text": "Fill all thy bones with aches, make thee roar"
      },
      {
        "lineNumber": 472,
        "text": "That beasts shall tremble at thy din."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 473,
        "text": "No, pray thee."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 474,
        "text": "It would control my dam's god, Setebos,"
      },
      {
        "lineNumber": 475,
        "text": "And make a vassal of him."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 476,
        "text": "So, slave, hence."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 477,
        "text": "Song."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 478,
        "text": "ARIEL"
      },
      {
        "lineNumber": 479,
        "text": "Come unto these yellow sands,"
      },
      {
        "lineNumber": 480,
        "text": "And then take hands."
      },
      {
        "lineNumber": 481,
        "text": "Curtsied when you have, and kissed"
      },
      {
        "lineNumber": 482,
        "text": "The wild waves whist."
      },
      {
        "lineNumber": 483,
        "text": "Foot it featly here and there,"
      },
      {
        "lineNumber": 484,
        "text": "And sweet sprites bear"
      },
      {
        "lineNumber": 485,
        "text": "The burden. Hark, hark!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 486,
        "text": "The watchdogs bark."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 487,
        "text": "Hark, hark! I hear"
      },
      {
        "lineNumber": 488,
        "text": "The strain of strutting chanticleer"
      },
      {
        "lineNumber": 489,
        "text": "Cry cock-a-diddle-dow."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 490,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 491,
        "text": "Where should this music be? I' th' air, or th' earth?"
      },
      {
        "lineNumber": 492,
        "text": "It sounds no more; and sure it waits upon"
      },
      {
        "lineNumber": 493,
        "text": "Some god o' th' island. Sitting on a bank,"
      },
      {
        "lineNumber": 494,
        "text": "Weeping again the King my father's wrack,"
      },
      {
        "lineNumber": 495,
        "text": "This music crept by me upon the waters,"
      },
      {
        "lineNumber": 496,
        "text": "Allaying both their fury and my passion"
      },
      {
        "lineNumber": 497,
        "text": "With its sweet air. Thence I have followed it,"
      },
      {
        "lineNumber": 498,
        "text": "Or it hath drawn me rather. But 'tis gone."
      },
      {
        "lineNumber": 499,
        "text": "No, it begins again."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 500,
        "text": "Song."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 501,
        "text": "ARIEL"
      },
      {
        "lineNumber": 502,
        "text": "Full fathom five thy father lies."
      },
      {
        "lineNumber": 503,
        "text": "Of his bones are coral made."
      },
      {
        "lineNumber": 504,
        "text": "Those are pearls that were his eyes."
      },
      {
        "lineNumber": 505,
        "text": "Nothing of him that doth fade"
      },
      {
        "lineNumber": 506,
        "text": "But doth suffer a sea change"
      },
      {
        "lineNumber": 507,
        "text": "Into something rich and strange."
      },
      {
        "lineNumber": 508,
        "text": "Sea nymphs hourly ring his knell."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 509,
        "text": "Hark, now I hear them: ding dong bell."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 510,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 511,
        "text": "The ditty does remember my drowned father."
      },
      {
        "lineNumber": 512,
        "text": "This is no mortal business, nor no sound"
      },
      {
        "lineNumber": 513,
        "text": "That the Earth owes. I hear it now above me."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 514,
        "text": "The fringed curtains of thine eye advance"
      },
      {
        "lineNumber": 515,
        "text": "And say what thou seest yond."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 516,
        "text": "What is 't? A spirit?"
      },
      {
        "lineNumber": 517,
        "text": "Lord, how it looks about! Believe me, sir,"
      },
      {
        "lineNumber": 518,
        "text": "It carries a brave form. But 'tis a spirit."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 519,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 520,
        "text": "No, wench, it eats and sleeps and hath such senses"
      },
      {
        "lineNumber": 521,
        "text": "As we have, such. This gallant which thou seest"
      },
      {
        "lineNumber": 522,
        "text": "Was in the wrack; and, but he's something stained"
      },
      {
        "lineNumber": 523,
        "text": "With grief--that's beauty's canker--thou might'st"
      },
      {
        "lineNumber": 524,
        "text": "call him"
      },
      {
        "lineNumber": 525,
        "text": "A goodly person. He hath lost his fellows"
      },
      {
        "lineNumber": 526,
        "text": "And strays about to find 'em."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 527,
        "text": "I might call him"
      },
      {
        "lineNumber": 528,
        "text": "A thing divine, for nothing natural"
      },
      {
        "lineNumber": 529,
        "text": "I ever saw so noble."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 530,
        "text": "PROSPERO, [aside]  It goes on, I see,"
      },
      {
        "lineNumber": 531,
        "text": "As my soul prompts it. [To Ariel.] Spirit, fine spirit,"
      },
      {
        "lineNumber": 532,
        "text": "I'll free thee"
      },
      {
        "lineNumber": 533,
        "text": "Within two days for this."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 534,
        "text": "FERDINAND, [seeing Miranda]  Most sure, the goddess"
      },
      {
        "lineNumber": 535,
        "text": "On whom these airs attend!--Vouchsafe my prayer"
      },
      {
        "lineNumber": 536,
        "text": "May know if you remain upon this island,"
      },
      {
        "lineNumber": 537,
        "text": "And that you will some good instruction give"
      },
      {
        "lineNumber": 538,
        "text": "How I may bear me here. My prime request,"
      },
      {
        "lineNumber": 539,
        "text": "Which I do last pronounce, is--O you wonder!--"
      },
      {
        "lineNumber": 540,
        "text": "If you be maid or no."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 541,
        "text": "No wonder, sir,"
      },
      {
        "lineNumber": 542,
        "text": "But certainly a maid."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 543,
        "text": "My language! Heavens!"
      },
      {
        "lineNumber": 544,
        "text": "I am the best of them that speak this speech,"
      },
      {
        "lineNumber": 545,
        "text": "Were I but where 'tis spoken."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 546,
        "text": "How? The best?"
      },
      {
        "lineNumber": 547,
        "text": "What wert thou if the King of Naples heard thee?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 548,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 549,
        "text": "A single thing, as I am now, that wonders"
      },
      {
        "lineNumber": 550,
        "text": "To hear thee speak of Naples. He does hear me,"
      },
      {
        "lineNumber": 551,
        "text": "And that he does I weep. Myself am Naples,"
      },
      {
        "lineNumber": 552,
        "text": "Who with mine eyes, never since at ebb, beheld"
      },
      {
        "lineNumber": 553,
        "text": "The King my father wracked."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 554,
        "text": "Alack, for mercy!"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 555,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 556,
        "text": "Yes, faith, and all his lords, the Duke of Milan"
      },
      {
        "lineNumber": 557,
        "text": "And his brave son being twain."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 558,
        "text": "PROSPERO, [aside]  The Duke of Milan"
      },
      {
        "lineNumber": 559,
        "text": "And his more braver daughter could control thee,"
      },
      {
        "lineNumber": 560,
        "text": "If now 'twere fit to do 't. At the first sight"
      },
      {
        "lineNumber": 561,
        "text": "They have changed eyes.--Delicate Ariel,"
      },
      {
        "lineNumber": 562,
        "text": "I'll set thee free for this. [To Ferdinand.] A word,"
      },
      {
        "lineNumber": 563,
        "text": "good sir."
      },
      {
        "lineNumber": 564,
        "text": "I fear you have done yourself some wrong. A word."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 565,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 566,
        "text": "Why speaks my father so ungently? This"
      },
      {
        "lineNumber": 567,
        "text": "Is the third man that e'er I saw, the first"
      },
      {
        "lineNumber": 568,
        "text": "That e'er I sighed for. Pity move my father"
      },
      {
        "lineNumber": 569,
        "text": "To be inclined my way."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 570,
        "text": "O, if a virgin,"
      },
      {
        "lineNumber": 571,
        "text": "And your affection not gone forth, I'll make you"
      },
      {
        "lineNumber": 572,
        "text": "The Queen of Naples."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 573,
        "text": "Soft, sir, one word more."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 574,
        "text": "swift business"
      },
      {
        "lineNumber": 575,
        "text": "I must uneasy make, lest too light winning"
      },
      {
        "lineNumber": 576,
        "text": "Make the prize light. [To Ferdinand.] One word"
      },
      {
        "lineNumber": 577,
        "text": "more. I charge thee"
      },
      {
        "lineNumber": 578,
        "text": "That thou attend me. Thou dost here usurp"
      },
      {
        "lineNumber": 579,
        "text": "The name thou ow'st not, and hast put thyself"
      },
      {
        "lineNumber": 580,
        "text": "Upon this island as a spy, to win it"
      },
      {
        "lineNumber": 581,
        "text": "From me, the lord on 't."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 582,
        "text": "No, as I am a man!"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 583,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 584,
        "text": "There's nothing ill can dwell in such a temple."
      },
      {
        "lineNumber": 585,
        "text": "If the ill spirit have so fair a house,"
      },
      {
        "lineNumber": 586,
        "text": "Good things will strive to dwell with 't."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 587,
        "text": "PROSPERO, [to Ferdinand]  Follow me."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 588,
        "text": "I'll manacle thy neck and feet together."
      },
      {
        "lineNumber": 589,
        "text": "Sea water shalt thou drink. Thy food shall be"
      },
      {
        "lineNumber": 590,
        "text": "The fresh-brook mussels, withered roots, and husks"
      },
      {
        "lineNumber": 591,
        "text": "Wherein the acorn cradled. Follow."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 592,
        "text": "No,"
      },
      {
        "lineNumber": 593,
        "text": "I will resist such entertainment till"
      },
      {
        "lineNumber": 594,
        "text": "Mine enemy has more power."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 595,
        "text": "O dear father,"
      },
      {
        "lineNumber": 596,
        "text": "Make not too rash a trial of him, for"
      },
      {
        "lineNumber": 597,
        "text": "He's gentle and not fearful."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 598,
        "text": "What, I say,"
      },
      {
        "lineNumber": 599,
        "text": "My foot my tutor?--Put thy sword up, traitor,"
      },
      {
        "lineNumber": 600,
        "text": "Who mak'st a show, but dar'st not strike, thy"
      },
      {
        "lineNumber": 601,
        "text": "conscience"
      },
      {
        "lineNumber": 602,
        "text": "Is so possessed with guilt. Come from thy ward,"
      },
      {
        "lineNumber": 603,
        "text": "For I can here disarm thee with this stick"
      },
      {
        "lineNumber": 604,
        "text": "And make thy weapon drop."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 605,
        "text": "Beseech you, father--"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 606,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 607,
        "text": "Hence! Hang not on my garments."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 608,
        "text": "Sir, have pity."
      },
      {
        "lineNumber": 609,
        "text": "I'll be his surety."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 610,
        "text": "Silence! One word more"
      },
      {
        "lineNumber": 611,
        "text": "Shall make me chide thee, if not hate thee. What,"
      },
      {
        "lineNumber": 612,
        "text": "An advocate for an impostor? Hush."
      },
      {
        "lineNumber": 613,
        "text": "Thou think'st there is no more such shapes as he,"
      },
      {
        "lineNumber": 614,
        "text": "Having seen but him and Caliban. Foolish wench,"
      },
      {
        "lineNumber": 615,
        "text": "To th' most of men this is a Caliban,"
      },
      {
        "lineNumber": 616,
        "text": "And they to him are angels."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 617,
        "text": "My affections"
      },
      {
        "lineNumber": 618,
        "text": "Are then most humble. I have no ambition"
      },
      {
        "lineNumber": 619,
        "text": "To see a goodlier man."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 620,
        "text": "PROSPERO, [to Ferdinand]  Come on, obey."
      },
      {
        "lineNumber": 621,
        "text": "Thy nerves are in their infancy again"
      },
      {
        "lineNumber": 622,
        "text": "And have no vigor in them."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 623,
        "text": "So they are."
      },
      {
        "lineNumber": 624,
        "text": "My spirits, as in a dream, are all bound up."
      },
      {
        "lineNumber": 625,
        "text": "My father's loss, the weakness which I feel,"
      },
      {
        "lineNumber": 626,
        "text": "The wrack of all my friends, nor this man's threats"
      },
      {
        "lineNumber": 627,
        "text": "To whom I am subdued, are but light to me,"
      },
      {
        "lineNumber": 628,
        "text": "Might I but through my prison once a day"
      },
      {
        "lineNumber": 629,
        "text": "Behold this maid. All corners else o' th' Earth"
      },
      {
        "lineNumber": 630,
        "text": "Let liberty make use of. Space enough"
      },
      {
        "lineNumber": 631,
        "text": "Have I in such a prison."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 632,
        "text": "PROSPERO, [aside]  It works.--Come on.--"
      },
      {
        "lineNumber": 633,
        "text": "Thou hast done well, fine Ariel.--Follow me."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 634,
        "text": "MIRANDA, [to Ferdinand]  Be of"
      },
      {
        "lineNumber": 635,
        "text": "comfort."
      },
      {
        "lineNumber": 636,
        "text": "My father's of a better nature, sir,"
      },
      {
        "lineNumber": 637,
        "text": "Than he appears by speech. This is unwonted"
      },
      {
        "lineNumber": 638,
        "text": "Which now came from him."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 639,
        "text": "PROSPERO, [to Ariel]  Thou shalt be as free"
      },
      {
        "lineNumber": 640,
        "text": "As mountain winds; but then exactly do"
      },
      {
        "lineNumber": 641,
        "text": "All points of my command."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 642,
        "text": "To th' syllable."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 643,
        "text": "Come follow. [To Miranda.] Speak not for him."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 644,
        "text": "====="
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Prospero and Miranda."
  },
  {
    "position": 7,
    "text": "Putting aside his cloak."
  },
  {
    "position": 8,
    "text": "or thou must now know farther.\t[They sit."
  },
  {
    "position": 44,
    "text": "Miranda falls asleep."
  },
  {
    "position": 44,
    "text": "Prospero puts on his cloak."
  },
  {
    "position": 45,
    "text": "Enter Ariel."
  },
  {
    "position": 54,
    "text": "is arms in this sad knot.\t[He folds his arms."
  },
  {
    "position": 83,
    "text": "Ariel exits."
  },
  {
    "position": 84,
    "text": "wake.\t[Miranda wakes."
  },
  {
    "position": 90,
    "text": "Enter Ariel like a water nymph."
  },
  {
    "position": 91,
    "text": "ark in thine ear.\t[He whispers to Ariel."
  },
  {
    "position": 91,
    "text": "RIEL  My lord, it shall be done.\t[He exits."
  },
  {
    "position": 91,
    "text": "ROSPERO, [to Caliban"
  },
  {
    "position": 92,
    "text": "Enter Caliban."
  },
  {
    "position": 101,
    "text": "Aside.] I must obey. His art is of such powe"
  },
  {
    "position": 103,
    "text": "Caliban exits."
  },
  {
    "position": 103,
    "text": "Enter Ferdinand; and Ariel, invisible"
  },
  {
    "position": 103,
    "text": "laying and singing."
  },
  {
    "position": 105,
    "text": "Burden dispersedly, within:] Bow-wow"
  },
  {
    "position": 106,
    "text": "Burden dispersedly, within:] Bow-wow"
  },
  {
    "position": 110,
    "text": "Burden, within:] Ding dong"
  },
  {
    "position": 112,
    "text": "ROSPERO, [to Miranda"
  },
  {
    "position": 128,
    "text": "Aside.] They are both in either's powers. But thi"
  },
  {
    "position": 132,
    "text": "To Miranda.] Speak not you for him. He's a traitor"
  },
  {
    "position": 132,
    "text": "To Ferdinand.] Come"
  },
  {
    "position": 134,
    "text": "He draws, and is charmed from moving."
  },
  {
    "position": 144,
    "text": "To Ariel.] Hark what thou else shalt do me"
  },
  {
    "position": 147,
    "text": "ROSPERO, [to Ferdinand"
  },
  {
    "position": 148,
    "text": "They exit."
  }
],
  autoInsights: {}
};

const the_tempest_2_1: SceneData = {
  playTitle: 'The Tempest',
  act: 2,
  scene: 1,
  speeches: [
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 2,
        "text": "Beseech you, sir, be merry. You have cause--"
      },
      {
        "lineNumber": 3,
        "text": "So have we all--of joy, for our escape"
      },
      {
        "lineNumber": 4,
        "text": "Is much beyond our loss. Our hint of woe"
      },
      {
        "lineNumber": 5,
        "text": "Is common; every day some sailor's wife,"
      },
      {
        "lineNumber": 6,
        "text": "The masters of some merchant, and the merchant"
      },
      {
        "lineNumber": 7,
        "text": "Have just our theme of woe. But for the miracle--"
      },
      {
        "lineNumber": 8,
        "text": "I mean our preservation--few in millions"
      },
      {
        "lineNumber": 9,
        "text": "Can speak like us. Then wisely, good sir, weigh"
      },
      {
        "lineNumber": 10,
        "text": "Our sorrow with our comfort."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 11,
        "text": "Prithee, peace."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 12,
        "text": "SEBASTIAN, [aside to Antonio]  He receives comfort like"
      },
      {
        "lineNumber": 13,
        "text": "cold porridge."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 14,
        "text": "The visitor will not give him o'er so."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 15,
        "text": "Look, he's winding up the watch of his wit."
      },
      {
        "lineNumber": 16,
        "text": "By and by it will strike."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 17,
        "text": "GONZALO, [to Alonso]  Sir--"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 18,
        "text": "One. Tell."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 19,
        "text": "When every grief is entertained that's offered,"
      },
      {
        "lineNumber": 20,
        "text": "comes to th' entertainer--"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 21,
        "text": "A dollar."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 22,
        "text": "Dolor comes to him indeed. You have spoken"
      },
      {
        "lineNumber": 23,
        "text": "truer than you purposed."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 24,
        "text": "You have taken it wiselier than I meant you"
      },
      {
        "lineNumber": 25,
        "text": "should."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 26,
        "text": "GONZALO, [to Alonso]  Therefore, my lord--"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 27,
        "text": "Fie, what a spendthrift is he of his tongue."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 28,
        "text": "ALONSO, [to Gonzalo]  I prithee, spare."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 29,
        "text": "Well, I have done. But yet--"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 30,
        "text": "SEBASTIAN, [aside to Antonio]  He will be talking."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 31,
        "text": "ANTONIO, [aside to Sebastian]  Which, of he or Adrian,"
      },
      {
        "lineNumber": 32,
        "text": "for a good wager, first begins to crow?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 33,
        "text": "The old cock."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 34,
        "text": "The cockerel."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 35,
        "text": "Done. The wager?"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 36,
        "text": "A laughter."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 37,
        "text": "A match!"
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 38,
        "text": "Though this island seem to be desert--"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 39,
        "text": "Ha, ha, ha."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 40,
        "text": "So. You're paid."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 41,
        "text": "Uninhabitable and almost inaccessible--"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 42,
        "text": "Yet--"
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 43,
        "text": "Yet--"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 44,
        "text": "He could not miss 't."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 45,
        "text": "It must needs be of subtle, tender, and delicate"
      },
      {
        "lineNumber": 46,
        "text": "temperance."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 47,
        "text": "Temperance was a delicate wench."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 48,
        "text": "Ay, and a subtle, as he most learnedly"
      },
      {
        "lineNumber": 49,
        "text": "delivered."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 50,
        "text": "The air breathes upon us here most sweetly."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 51,
        "text": "As if it had lungs, and rotten ones."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 52,
        "text": "Or as 'twere perfumed by a fen."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 53,
        "text": "Here is everything advantageous to life."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 54,
        "text": "True, save means to live."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 55,
        "text": "Of that there's none, or little."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 56,
        "text": "How lush and lusty the grass looks! How"
      },
      {
        "lineNumber": 57,
        "text": "green!"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 58,
        "text": "The ground indeed is tawny."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 59,
        "text": "With an eye of green in 't."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 60,
        "text": "He misses not much."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 61,
        "text": "No, he doth but mistake the truth totally."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 62,
        "text": "But the rarity of it is, which is indeed almost"
      },
      {
        "lineNumber": 63,
        "text": "beyond credit--"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 64,
        "text": "As many vouched rarities are."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 65,
        "text": "That our garments, being, as they were,"
      },
      {
        "lineNumber": 66,
        "text": "drenched in the sea, hold notwithstanding their"
      },
      {
        "lineNumber": 67,
        "text": "freshness and gloss, being rather new-dyed than"
      },
      {
        "lineNumber": 68,
        "text": "stained with salt water."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 69,
        "text": "If but one of his pockets could speak, would"
      },
      {
        "lineNumber": 70,
        "text": "it not say he lies?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 71,
        "text": "Ay, or very falsely pocket up his report."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 72,
        "text": "Methinks our garments are now as fresh as"
      },
      {
        "lineNumber": 73,
        "text": "when we put them on first in Afric, at the marriage"
      },
      {
        "lineNumber": 74,
        "text": "of the King's fair daughter Claribel to the King of"
      },
      {
        "lineNumber": 75,
        "text": "Tunis."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 76,
        "text": "'Twas a sweet marriage, and we prosper"
      },
      {
        "lineNumber": 77,
        "text": "well in our return."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 78,
        "text": "Tunis was never graced before with such a"
      },
      {
        "lineNumber": 79,
        "text": "paragon to their queen."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 80,
        "text": "Not since widow Dido's time."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 81,
        "text": "Widow? A pox o' that! How came that \"widow\""
      },
      {
        "lineNumber": 82,
        "text": "in? Widow Dido!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 83,
        "text": "What if he had said \"widower Aeneas\" too?"
      },
      {
        "lineNumber": 84,
        "text": "Good Lord, how you take it!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 85,
        "text": "ADRIAN, [to Gonzalo]  \"Widow Dido,\" said you? You"
      },
      {
        "lineNumber": 86,
        "text": "make me study of that. She was of Carthage, not of"
      },
      {
        "lineNumber": 87,
        "text": "Tunis."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 88,
        "text": "This Tunis, sir, was Carthage."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 89,
        "text": "Carthage?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 90,
        "text": "I assure you, Carthage."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 91,
        "text": "His word is more than the miraculous harp."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 92,
        "text": "He hath raised the wall, and houses too."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 93,
        "text": "What impossible matter will he make easy"
      },
      {
        "lineNumber": 94,
        "text": "next?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 95,
        "text": "I think he will carry this island home in his"
      },
      {
        "lineNumber": 96,
        "text": "pocket and give it his son for an apple."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 97,
        "text": "And sowing the kernels of it in the sea, bring"
      },
      {
        "lineNumber": 98,
        "text": "forth more islands."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 99,
        "text": "Ay."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 100,
        "text": "Why, in good time."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 101,
        "text": "GONZALO, [to Alonso]  Sir, we were talking that our"
      },
      {
        "lineNumber": 102,
        "text": "garments seem now as fresh as when we were at"
      },
      {
        "lineNumber": 103,
        "text": "Tunis at the marriage of your daughter, who is now"
      },
      {
        "lineNumber": 104,
        "text": "queen."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 105,
        "text": "And the rarest that e'er came there."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 106,
        "text": "Bate, I beseech you, widow Dido."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 107,
        "text": "O, widow Dido? Ay, widow Dido."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 108,
        "text": "GONZALO, [to Alonso]  Is not, sir, my doublet as fresh as"
      },
      {
        "lineNumber": 109,
        "text": "the first day I wore it? I mean, in a sort."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 110,
        "text": "That \"sort\" was well fished for."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 111,
        "text": "GONZALO, [to Alonso]  When I wore it at your daughter's"
      },
      {
        "lineNumber": 112,
        "text": "marriage."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 113,
        "text": "ALONSO"
      },
      {
        "lineNumber": 114,
        "text": "You cram these words into mine ears against"
      },
      {
        "lineNumber": 115,
        "text": "The stomach of my sense. Would I had never"
      },
      {
        "lineNumber": 116,
        "text": "Married my daughter there, for coming thence"
      },
      {
        "lineNumber": 117,
        "text": "My son is lost, and, in my rate, she too,"
      },
      {
        "lineNumber": 118,
        "text": "Who is so far from Italy removed"
      },
      {
        "lineNumber": 119,
        "text": "I ne'er again shall see her.--O, thou mine heir"
      },
      {
        "lineNumber": 120,
        "text": "Of Naples and of Milan, what strange fish"
      },
      {
        "lineNumber": 121,
        "text": "Hath made his meal on thee?"
      }
    ]
  },
  {
    "speaker": "FRANCISCO",
    "lines": [
      {
        "lineNumber": 122,
        "text": "Sir, he may live."
      },
      {
        "lineNumber": 123,
        "text": "I saw him beat the surges under him"
      },
      {
        "lineNumber": 124,
        "text": "And ride upon their backs. He trod the water,"
      },
      {
        "lineNumber": 125,
        "text": "Whose enmity he flung aside, and breasted"
      },
      {
        "lineNumber": 126,
        "text": "The surge most swoll'n that met him. His bold head"
      },
      {
        "lineNumber": 127,
        "text": "'Bove the contentious waves he kept, and oared"
      },
      {
        "lineNumber": 128,
        "text": "Himself with his good arms in lusty stroke"
      },
      {
        "lineNumber": 129,
        "text": "To th' shore, that o'er his wave-worn basis bowed,"
      },
      {
        "lineNumber": 130,
        "text": "As stooping to relieve him. I not doubt"
      },
      {
        "lineNumber": 131,
        "text": "He came alive to land."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 132,
        "text": "No, no, he's gone."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 133,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 134,
        "text": "Sir, you may thank yourself for this great loss,"
      },
      {
        "lineNumber": 135,
        "text": "That would not bless our Europe with your daughter,"
      },
      {
        "lineNumber": 136,
        "text": "But rather lose her to an African,"
      },
      {
        "lineNumber": 137,
        "text": "Where she at least is banished from your eye,"
      },
      {
        "lineNumber": 138,
        "text": "Who hath cause to wet the grief on 't."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 139,
        "text": "Prithee, peace."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 140,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 141,
        "text": "You were kneeled to and importuned otherwise"
      },
      {
        "lineNumber": 142,
        "text": "By all of us; and the fair soul herself"
      },
      {
        "lineNumber": 143,
        "text": "Weighed between loathness and obedience at"
      },
      {
        "lineNumber": 144,
        "text": "Which end o' th' beam should bow. We have lost"
      },
      {
        "lineNumber": 145,
        "text": "your son,"
      },
      {
        "lineNumber": 146,
        "text": "I fear, forever. Milan and Naples have"
      },
      {
        "lineNumber": 147,
        "text": "More widows in them of this business' making"
      },
      {
        "lineNumber": 148,
        "text": "Than we bring men to comfort them."
      },
      {
        "lineNumber": 149,
        "text": "The fault's your own."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 150,
        "text": "So is the dear'st o' th' loss."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 151,
        "text": "My lord Sebastian,"
      },
      {
        "lineNumber": 152,
        "text": "The truth you speak doth lack some gentleness"
      },
      {
        "lineNumber": 153,
        "text": "And time to speak it in. You rub the sore"
      },
      {
        "lineNumber": 154,
        "text": "When you should bring the plaster."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 155,
        "text": "Very well."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 156,
        "text": "And most chirurgeonly."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 157,
        "text": "It is foul weather in us all, good sir,"
      },
      {
        "lineNumber": 158,
        "text": "When you are cloudy."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 159,
        "text": "Foul weather?"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 160,
        "text": "Very foul."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 161,
        "text": "GONZALO"
      },
      {
        "lineNumber": 162,
        "text": "Had I plantation of this isle, my lord--"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 163,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 164,
        "text": "He'd sow 't with nettle seed."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 165,
        "text": "Or docks, or mallows."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 166,
        "text": "GONZALO"
      },
      {
        "lineNumber": 167,
        "text": "And were the king on 't, what would I do?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 168,
        "text": "Scape being drunk, for want of wine."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 169,
        "text": "GONZALO"
      },
      {
        "lineNumber": 170,
        "text": "I' th' commonwealth I would by contraries"
      },
      {
        "lineNumber": 171,
        "text": "Execute all things, for no kind of traffic"
      },
      {
        "lineNumber": 172,
        "text": "Would I admit; no name of magistrate;"
      },
      {
        "lineNumber": 173,
        "text": "Letters should not be known; riches, poverty,"
      },
      {
        "lineNumber": 174,
        "text": "And use of service, none; contract, succession,"
      },
      {
        "lineNumber": 175,
        "text": "Bourn, bound of land, tilth, vineyard, none;"
      },
      {
        "lineNumber": 176,
        "text": "No use of metal, corn, or wine, or oil;"
      },
      {
        "lineNumber": 177,
        "text": "No occupation; all men idle, all,"
      },
      {
        "lineNumber": 178,
        "text": "And women too, but innocent and pure;"
      },
      {
        "lineNumber": 179,
        "text": "No sovereignty--"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 180,
        "text": "Yet he would be king on 't."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 181,
        "text": "The latter end of his commonwealth forgets"
      },
      {
        "lineNumber": 182,
        "text": "the beginning."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 183,
        "text": "GONZALO"
      },
      {
        "lineNumber": 184,
        "text": "All things in common nature should produce"
      },
      {
        "lineNumber": 185,
        "text": "Without sweat or endeavor; treason, felony,"
      },
      {
        "lineNumber": 186,
        "text": "Sword, pike, knife, gun, or need of any engine"
      },
      {
        "lineNumber": 187,
        "text": "Would I not have; but nature should bring forth"
      },
      {
        "lineNumber": 188,
        "text": "Of its own kind all foison, all abundance,"
      },
      {
        "lineNumber": 189,
        "text": "To feed my innocent people."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 190,
        "text": "No marrying 'mong his subjects?"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 191,
        "text": "None, man, all idle: whores and knaves."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 192,
        "text": "GONZALO"
      },
      {
        "lineNumber": 193,
        "text": "I would with such perfection govern, sir,"
      },
      {
        "lineNumber": 194,
        "text": "T' excel the Golden Age."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 195,
        "text": "'Save his Majesty!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 196,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 197,
        "text": "Long live Gonzalo!"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 198,
        "text": "And do you mark me, sir?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 199,
        "text": "ALONSO"
      },
      {
        "lineNumber": 200,
        "text": "Prithee, no more. Thou dost talk nothing to me."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 201,
        "text": "I do well believe your Highness, and did it to"
      },
      {
        "lineNumber": 202,
        "text": "minister occasion to these gentlemen, who are of"
      },
      {
        "lineNumber": 203,
        "text": "such sensible and nimble lungs that they always use"
      },
      {
        "lineNumber": 204,
        "text": "to laugh at nothing."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 205,
        "text": "'Twas you we laughed at."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 206,
        "text": "Who in this kind of merry fooling am"
      },
      {
        "lineNumber": 207,
        "text": "nothing to you. So you may continue, and laugh at"
      },
      {
        "lineNumber": 208,
        "text": "nothing still."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 209,
        "text": "What a blow was there given!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 210,
        "text": "An it had not fallen flatlong."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 211,
        "text": "You are gentlemen of brave mettle. You"
      },
      {
        "lineNumber": 212,
        "text": "would lift the moon out of her sphere if she would"
      },
      {
        "lineNumber": 213,
        "text": "continue in it five weeks without changing."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 214,
        "text": "We would so, and then go a-batfowling."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 215,
        "text": "ANTONIO, [to Gonzalo]  Nay, good my lord, be not angry."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 216,
        "text": "No, I warrant you, I will not adventure my"
      },
      {
        "lineNumber": 217,
        "text": "discretion so weakly. Will you laugh me asleep?"
      },
      {
        "lineNumber": 218,
        "text": "For I am very heavy."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 219,
        "text": "Go sleep, and hear us."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 220,
        "text": "ALONSO"
      },
      {
        "lineNumber": 221,
        "text": "What, all so soon asleep? I wish mine eyes"
      },
      {
        "lineNumber": 222,
        "text": "Would, with themselves, shut up my thoughts. I find"
      },
      {
        "lineNumber": 223,
        "text": "They are inclined to do so."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 224,
        "text": "Please you, sir,"
      },
      {
        "lineNumber": 225,
        "text": "Do not omit the heavy offer of it."
      },
      {
        "lineNumber": 226,
        "text": "It seldom visits sorrow; when it doth,"
      },
      {
        "lineNumber": 227,
        "text": "It is a comforter."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 228,
        "text": "We two, my lord,"
      },
      {
        "lineNumber": 229,
        "text": "Will guard your person while you take your rest,"
      },
      {
        "lineNumber": 230,
        "text": "And watch your safety."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 231,
        "text": "Thank you. Wondrous heavy."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 232,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 233,
        "text": "What a strange drowsiness possesses them!"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 234,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 235,
        "text": "It is the quality o' th' climate."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 236,
        "text": "Why"
      },
      {
        "lineNumber": 237,
        "text": "Doth it not then our eyelids sink? I find"
      },
      {
        "lineNumber": 238,
        "text": "Not myself disposed to sleep."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 239,
        "text": "Nor I. My spirits are nimble."
      },
      {
        "lineNumber": 240,
        "text": "They fell together all, as by consent."
      },
      {
        "lineNumber": 241,
        "text": "They dropped as by a thunderstroke. What might,"
      },
      {
        "lineNumber": 242,
        "text": "Worthy Sebastian, O, what might--? No more."
      },
      {
        "lineNumber": 243,
        "text": "And yet methinks I see it in thy face"
      },
      {
        "lineNumber": 244,
        "text": "What thou shouldst be. Th' occasion speaks thee, and"
      },
      {
        "lineNumber": 245,
        "text": "My strong imagination sees a crown"
      },
      {
        "lineNumber": 246,
        "text": "Dropping upon thy head."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 247,
        "text": "What, art thou waking?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 248,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 249,
        "text": "Do you not hear me speak?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 250,
        "text": "I do, and surely"
      },
      {
        "lineNumber": 251,
        "text": "It is a sleepy language, and thou speak'st"
      },
      {
        "lineNumber": 252,
        "text": "Out of thy sleep. What is it thou didst say?"
      },
      {
        "lineNumber": 253,
        "text": "This is a strange repose, to be asleep"
      },
      {
        "lineNumber": 254,
        "text": "With eyes wide open--standing, speaking, moving--"
      },
      {
        "lineNumber": 255,
        "text": "And yet so fast asleep."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 256,
        "text": "Noble Sebastian,"
      },
      {
        "lineNumber": 257,
        "text": "Thou let'st thy fortune sleep, die rather, wink'st"
      },
      {
        "lineNumber": 258,
        "text": "Whiles thou art waking."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 259,
        "text": "Thou dost snore distinctly."
      },
      {
        "lineNumber": 260,
        "text": "There's meaning in thy snores."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 261,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 262,
        "text": "I am more serious than my custom. You"
      },
      {
        "lineNumber": 263,
        "text": "Must be so too, if heed me; which to do"
      },
      {
        "lineNumber": 264,
        "text": "Trebles thee o'er."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 265,
        "text": "Well, I am standing water."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 266,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 267,
        "text": "I'll teach you how to flow."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 268,
        "text": "Do so. To ebb"
      },
      {
        "lineNumber": 269,
        "text": "Hereditary sloth instructs me."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 270,
        "text": "O,"
      },
      {
        "lineNumber": 271,
        "text": "If you but knew how you the purpose cherish"
      },
      {
        "lineNumber": 272,
        "text": "Whiles thus you mock it, how in stripping it"
      },
      {
        "lineNumber": 273,
        "text": "You more invest it. Ebbing men indeed"
      },
      {
        "lineNumber": 274,
        "text": "Most often do so near the bottom run"
      },
      {
        "lineNumber": 275,
        "text": "By their own fear or sloth."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 276,
        "text": "Prithee, say on."
      },
      {
        "lineNumber": 277,
        "text": "The setting of thine eye and cheek proclaim"
      },
      {
        "lineNumber": 278,
        "text": "A matter from thee, and a birth indeed"
      },
      {
        "lineNumber": 279,
        "text": "Which throes thee much to yield."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 280,
        "text": "Thus, sir:"
      },
      {
        "lineNumber": 281,
        "text": "Although this lord of weak remembrance--this,"
      },
      {
        "lineNumber": 282,
        "text": "Who shall be of as little memory"
      },
      {
        "lineNumber": 283,
        "text": "When he is earthed--hath here almost persuaded--"
      },
      {
        "lineNumber": 284,
        "text": "For he's a spirit of persuasion, only"
      },
      {
        "lineNumber": 285,
        "text": "Professes to persuade--the King his son's alive,"
      },
      {
        "lineNumber": 286,
        "text": "'Tis as impossible that he's undrowned"
      },
      {
        "lineNumber": 287,
        "text": "As he that sleeps here swims."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 288,
        "text": "I have no hope"
      },
      {
        "lineNumber": 289,
        "text": "That he's undrowned."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 290,
        "text": "O, out of that no hope"
      },
      {
        "lineNumber": 291,
        "text": "What great hope have you! No hope that way is"
      },
      {
        "lineNumber": 292,
        "text": "Another way so high a hope that even"
      },
      {
        "lineNumber": 293,
        "text": "Ambition cannot pierce a wink beyond,"
      },
      {
        "lineNumber": 294,
        "text": "But doubt discovery there. Will you grant with me"
      },
      {
        "lineNumber": 295,
        "text": "That Ferdinand is drowned?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 296,
        "text": "He's gone."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 297,
        "text": "Then tell me,"
      },
      {
        "lineNumber": 298,
        "text": "Who's the next heir of Naples?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 299,
        "text": "Claribel."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 300,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 301,
        "text": "She that is Queen of Tunis; she that dwells"
      },
      {
        "lineNumber": 302,
        "text": "Ten leagues beyond man's life; she that from Naples"
      },
      {
        "lineNumber": 303,
        "text": "Can have no note, unless the sun were post--"
      },
      {
        "lineNumber": 304,
        "text": "The man i' th' moon's too slow--till newborn chins"
      },
      {
        "lineNumber": 305,
        "text": "Be rough and razorable; she that from whom"
      },
      {
        "lineNumber": 306,
        "text": "We all were sea-swallowed, though some cast again,"
      },
      {
        "lineNumber": 307,
        "text": "And by that destiny to perform an act"
      },
      {
        "lineNumber": 308,
        "text": "Whereof what's past is prologue, what to come"
      },
      {
        "lineNumber": 309,
        "text": "In yours and my discharge."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 310,
        "text": "What stuff is this? How say you?"
      },
      {
        "lineNumber": 311,
        "text": "'Tis true my brother's daughter's Queen of Tunis,"
      },
      {
        "lineNumber": 312,
        "text": "So is she heir of Naples, 'twixt which regions"
      },
      {
        "lineNumber": 313,
        "text": "There is some space."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 314,
        "text": "A space whose ev'ry cubit"
      },
      {
        "lineNumber": 315,
        "text": "Seems to cry out \"How shall that Claribel"
      },
      {
        "lineNumber": 316,
        "text": "Measure us back to Naples? Keep in Tunis"
      },
      {
        "lineNumber": 317,
        "text": "And let Sebastian wake.\" Say this were death"
      },
      {
        "lineNumber": 318,
        "text": "That now hath seized them, why, they were no worse"
      },
      {
        "lineNumber": 319,
        "text": "Than now they are. There be that can rule Naples"
      },
      {
        "lineNumber": 320,
        "text": "As well as he that sleeps, lords that can prate"
      },
      {
        "lineNumber": 321,
        "text": "As amply and unnecessarily"
      },
      {
        "lineNumber": 322,
        "text": "As this Gonzalo. I myself could make"
      },
      {
        "lineNumber": 323,
        "text": "A chough of as deep chat. O, that you bore"
      },
      {
        "lineNumber": 324,
        "text": "The mind that I do, what a sleep were this"
      },
      {
        "lineNumber": 325,
        "text": "For your advancement! Do you understand me?"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 326,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 327,
        "text": "Methinks I do."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 328,
        "text": "And how does your content"
      },
      {
        "lineNumber": 329,
        "text": "Tender your own good fortune?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 330,
        "text": "I remember"
      },
      {
        "lineNumber": 331,
        "text": "You did supplant your brother Prospero."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 332,
        "text": "True,"
      },
      {
        "lineNumber": 333,
        "text": "And look how well my garments sit upon me,"
      },
      {
        "lineNumber": 334,
        "text": "Much feater than before. My brother's servants"
      },
      {
        "lineNumber": 335,
        "text": "Were then my fellows; now they are my men."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 336,
        "text": "But, for your conscience?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 337,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 338,
        "text": "Ay, sir, where lies that? If 'twere a kibe,"
      },
      {
        "lineNumber": 339,
        "text": "'Twould put me to my slipper, but I feel not"
      },
      {
        "lineNumber": 340,
        "text": "This deity in my bosom. Twenty consciences"
      },
      {
        "lineNumber": 341,
        "text": "That stand 'twixt me and Milan, candied be they"
      },
      {
        "lineNumber": 342,
        "text": "And melt ere they molest! Here lies your brother,"
      },
      {
        "lineNumber": 343,
        "text": "No better than the earth he lies upon."
      },
      {
        "lineNumber": 344,
        "text": "If he were that which now he's like--that's dead--"
      },
      {
        "lineNumber": 345,
        "text": "Whom I with this obedient steel, three inches of it,"
      },
      {
        "lineNumber": 346,
        "text": "Can lay to bed forever; whiles you, doing thus,"
      },
      {
        "lineNumber": 347,
        "text": "To the perpetual wink for aye might put"
      },
      {
        "lineNumber": 348,
        "text": "This ancient morsel, this Sir Prudence, who"
      },
      {
        "lineNumber": 349,
        "text": "Should not upbraid our course. For all the rest,"
      },
      {
        "lineNumber": 350,
        "text": "They'll take suggestion as a cat laps milk."
      },
      {
        "lineNumber": 351,
        "text": "They'll tell the clock to any business that"
      },
      {
        "lineNumber": 352,
        "text": "We say befits the hour."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 353,
        "text": "Thy case, dear friend,"
      },
      {
        "lineNumber": 354,
        "text": "Shall be my precedent: as thou got'st Milan,"
      },
      {
        "lineNumber": 355,
        "text": "I'll come by Naples. Draw thy sword. One stroke"
      },
      {
        "lineNumber": 356,
        "text": "Shall free thee from the tribute which thou payest,"
      },
      {
        "lineNumber": 357,
        "text": "And I the King shall love thee."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 358,
        "text": "Draw together,"
      },
      {
        "lineNumber": 359,
        "text": "And when I rear my hand, do you the like"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 360,
        "text": "O, but one word."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 361,
        "text": "My master through his art foresees the danger"
      },
      {
        "lineNumber": 362,
        "text": "That you, his friend, are in, and sends me forth--"
      },
      {
        "lineNumber": 363,
        "text": "For else his project dies--to keep them living."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 364,
        "text": "While you here do snoring lie,"
      },
      {
        "lineNumber": 365,
        "text": "Open-eyed conspiracy"
      },
      {
        "lineNumber": 366,
        "text": "His time doth take."
      },
      {
        "lineNumber": 367,
        "text": "If of life you keep a care,"
      },
      {
        "lineNumber": 368,
        "text": "Shake off slumber and beware."
      },
      {
        "lineNumber": 369,
        "text": "Awake, awake!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 370,
        "text": "ANTONIO, [to Sebastian]  Then let us both be sudden."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 371,
        "text": "GONZALO, [waking]  Now, good angels preserve the"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 372,
        "text": "Why, how now, ho! Awake? Why are you drawn?"
      },
      {
        "lineNumber": 373,
        "text": "Wherefore this ghastly looking?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 374,
        "text": "GONZALO, [to Sebastian]  What's the matter?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 375,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 376,
        "text": "Whiles we stood here securing your repose,"
      },
      {
        "lineNumber": 377,
        "text": "Even now, we heard a hollow burst of bellowing"
      },
      {
        "lineNumber": 378,
        "text": "Like bulls, or rather lions. Did 't not wake you?"
      },
      {
        "lineNumber": 379,
        "text": "It struck mine ear most terribly."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 380,
        "text": "I heard nothing."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 381,
        "text": "ANTONIO"
      },
      {
        "lineNumber": 382,
        "text": "O, 'twas a din to fright a monster's ear,"
      },
      {
        "lineNumber": 383,
        "text": "To make an earthquake. Sure, it was the roar"
      },
      {
        "lineNumber": 384,
        "text": "Of a whole herd of lions."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 385,
        "text": "Heard you this, Gonzalo?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 386,
        "text": "GONZALO"
      },
      {
        "lineNumber": 387,
        "text": "Upon mine honor, sir, I heard a humming,"
      },
      {
        "lineNumber": 388,
        "text": "And that a strange one too, which did awake me."
      },
      {
        "lineNumber": 389,
        "text": "I shaked you, sir, and cried. As mine eyes opened,"
      },
      {
        "lineNumber": 390,
        "text": "I saw their weapons drawn. There was a noise,"
      },
      {
        "lineNumber": 391,
        "text": "That's verily. 'Tis best we stand upon our guard,"
      },
      {
        "lineNumber": 392,
        "text": "Or that we quit this place. Let's draw our weapons."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 393,
        "text": "ALONSO"
      },
      {
        "lineNumber": 394,
        "text": "Lead off this ground, and let's make further search"
      },
      {
        "lineNumber": 395,
        "text": "For my poor son."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 396,
        "text": "Heavens keep him from these beasts,"
      },
      {
        "lineNumber": 397,
        "text": "For he is, sure, i' th' island."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 398,
        "text": "Lead away."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 399,
        "text": "Prospero my lord shall know what I have done."
      },
      {
        "lineNumber": 400,
        "text": "So, king, go safely on to seek thy son."
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian"
  },
  {
    "position": 1,
    "text": "rancisco, and others."
  },
  {
    "position": 1,
    "text": "ONZALO, [to Alonso"
  },
  {
    "position": 83,
    "text": "ONZALO, [to Alonso"
  },
  {
    "position": 108,
    "text": "Enter Ariel invisible, playing solemn music."
  },
  {
    "position": 112,
    "text": "All sink down asleep except Alonso"
  },
  {
    "position": 112,
    "text": "ntonio, and Sebastian."
  },
  {
    "position": 116,
    "text": "Alonso sleeps. Ariel exits."
  },
  {
    "position": 148,
    "text": "o fall it on Gonzalo.\t[They draw their swords."
  },
  {
    "position": 149,
    "text": "They talk apart."
  },
  {
    "position": 149,
    "text": "Enter Ariel, invisible, with music and song."
  },
  {
    "position": 149,
    "text": "RIEL, [to the sleeping Gonzalo"
  },
  {
    "position": 150,
    "text": "Sings in Gonzalo's ear:"
  },
  {
    "position": 153,
    "text": "ing!\t[He wakes Alonso."
  },
  {
    "position": 153,
    "text": "LONSO, [to Sebastian"
  },
  {
    "position": 163,
    "text": "RIEL, [aside"
  },
  {
    "position": 164,
    "text": "They exit."
  }
],
  autoInsights: {}
};

const the_tempest_2_2: SceneData = {
  playTitle: 'The Tempest',
  act: 2,
  scene: 2,
  speeches: [
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 2,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 3,
        "text": "All the infections that the sun sucks up"
      },
      {
        "lineNumber": 4,
        "text": "From bogs, fens, flats, on Prosper fall and make him"
      },
      {
        "lineNumber": 5,
        "text": "By inchmeal a disease! His spirits hear me,"
      },
      {
        "lineNumber": 6,
        "text": "And yet I needs must curse. But they'll nor pinch,"
      },
      {
        "lineNumber": 7,
        "text": "Fright me with urchin-shows, pitch me i' th' mire,"
      },
      {
        "lineNumber": 8,
        "text": "Nor lead me like a firebrand in the dark"
      },
      {
        "lineNumber": 9,
        "text": "Out of my way, unless he bid 'em. But"
      },
      {
        "lineNumber": 10,
        "text": "For every trifle are they set upon me,"
      },
      {
        "lineNumber": 11,
        "text": "Sometimes like apes, that mow and chatter at me"
      },
      {
        "lineNumber": 12,
        "text": "And after bite me; then like hedgehogs, which"
      },
      {
        "lineNumber": 13,
        "text": "Lie tumbling in my barefoot way and mount"
      },
      {
        "lineNumber": 14,
        "text": "Their pricks at my footfall. Sometime am I"
      },
      {
        "lineNumber": 15,
        "text": "All wound with adders, who with cloven tongues"
      },
      {
        "lineNumber": 16,
        "text": "Do hiss me into madness. Lo, now, lo!"
      },
      {
        "lineNumber": 17,
        "text": "Here comes a spirit of his, and to torment me"
      },
      {
        "lineNumber": 18,
        "text": "For bringing wood in slowly. I'll fall flat."
      },
      {
        "lineNumber": 19,
        "text": "Perchance he will not mind me."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 20,
        "text": "Here's neither bush nor shrub to bear off"
      },
      {
        "lineNumber": 21,
        "text": "any weather at all. And another storm brewing; I"
      },
      {
        "lineNumber": 22,
        "text": "hear it sing i' th' wind. Yond same black cloud, yond"
      },
      {
        "lineNumber": 23,
        "text": "huge one, looks like a foul bombard that would shed"
      },
      {
        "lineNumber": 24,
        "text": "his liquor. If it should thunder as it did before, I"
      },
      {
        "lineNumber": 25,
        "text": "know not where to hide my head. Yond same cloud"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 26,
        "text": "What have we here, a man or a fish? Dead or"
      },
      {
        "lineNumber": 27,
        "text": "alive? A fish, he smells like a fish--a very ancient"
      },
      {
        "lineNumber": 28,
        "text": "and fishlike smell, a kind of not-of-the-newest poor-John."
      },
      {
        "lineNumber": 29,
        "text": "A strange fish. Were I in England now, as once"
      },
      {
        "lineNumber": 30,
        "text": "I was, and had but this fish painted, not a holiday"
      },
      {
        "lineNumber": 31,
        "text": "fool there but would give a piece of silver. There"
      },
      {
        "lineNumber": 32,
        "text": "would this monster make a man. Any strange beast"
      },
      {
        "lineNumber": 33,
        "text": "there makes a man. When they will not give a doit to"
      },
      {
        "lineNumber": 34,
        "text": "relieve a lame beggar, they will lay out ten to see a"
      },
      {
        "lineNumber": 35,
        "text": "dead Indian. Legged like a man, and his fins like"
      },
      {
        "lineNumber": 36,
        "text": "arms! Warm, o' my troth! I do now let loose my"
      },
      {
        "lineNumber": 37,
        "text": "opinion, hold it no longer: this is no fish, but an"
      },
      {
        "lineNumber": 38,
        "text": "islander that hath lately suffered by a thunderbolt."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 39,
        "text": "way is to creep under his gaberdine. There is no"
      },
      {
        "lineNumber": 40,
        "text": "other shelter hereabout. Misery acquaints a man"
      },
      {
        "lineNumber": 41,
        "text": "with strange bedfellows. I will here shroud till the"
      },
      {
        "lineNumber": 42,
        "text": "dregs of the storm be past."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 43,
        "text": "STEPHANO"
      },
      {
        "lineNumber": 44,
        "text": "I shall no more to sea, to sea."
      },
      {
        "lineNumber": 45,
        "text": "Here shall I die ashore--"
      },
      {
        "lineNumber": 46,
        "text": "This is a very scurvy tune to sing at a man's funeral."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 47,
        "text": "The master, the swabber, the boatswain, and I,"
      },
      {
        "lineNumber": 48,
        "text": "The gunner and his mate,"
      },
      {
        "lineNumber": 49,
        "text": "Loved Mall, Meg, and Marian, and Margery,"
      },
      {
        "lineNumber": 50,
        "text": "But none of us cared for Kate."
      },
      {
        "lineNumber": 51,
        "text": "For she had a tongue with a tang,"
      },
      {
        "lineNumber": 52,
        "text": "Would cry to a sailor \"Go hang!\""
      },
      {
        "lineNumber": 53,
        "text": "She loved not the savor of tar nor of pitch,"
      },
      {
        "lineNumber": 54,
        "text": "Yet a tailor might scratch her where'er she did itch."
      },
      {
        "lineNumber": 55,
        "text": "Then to sea, boys, and let her go hang!"
      },
      {
        "lineNumber": 56,
        "text": "This is a scurvy tune too. But here's my comfort."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 57,
        "text": "Do not torment me! O!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 58,
        "text": "What's the matter? Have we devils here? Do"
      },
      {
        "lineNumber": 59,
        "text": "you put tricks upon 's with savages and men of Ind?"
      },
      {
        "lineNumber": 60,
        "text": "Ha? I have not scaped drowning to be afeard now"
      },
      {
        "lineNumber": 61,
        "text": "of your four legs, for it hath been said \"As proper a"
      },
      {
        "lineNumber": 62,
        "text": "man as ever went on four legs cannot make him"
      },
      {
        "lineNumber": 63,
        "text": "give ground,\" and it shall be said so again while"
      },
      {
        "lineNumber": 64,
        "text": "Stephano breathes at' nostrils."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 65,
        "text": "The spirit torments me. O!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 66,
        "text": "This is some monster of the isle with four"
      },
      {
        "lineNumber": 67,
        "text": "legs, who hath got, as I take it, an ague. Where the"
      },
      {
        "lineNumber": 68,
        "text": "devil should he learn our language? I will give him"
      },
      {
        "lineNumber": 69,
        "text": "some relief, if it be but for that. If I can recover him"
      },
      {
        "lineNumber": 70,
        "text": "and keep him tame and get to Naples with him,"
      },
      {
        "lineNumber": 71,
        "text": "he's a present for any emperor that ever trod on"
      },
      {
        "lineNumber": 72,
        "text": "neat's leather."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 73,
        "text": "Do not torment me, prithee. I'll bring my"
      },
      {
        "lineNumber": 74,
        "text": "wood home faster."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 75,
        "text": "He's in his fit now, and does not talk after"
      },
      {
        "lineNumber": 76,
        "text": "the wisest. He shall taste of my bottle. If he have"
      },
      {
        "lineNumber": 77,
        "text": "never drunk wine afore, it will go near to remove"
      },
      {
        "lineNumber": 78,
        "text": "his fit. If I can recover him and keep him tame, I will"
      },
      {
        "lineNumber": 79,
        "text": "not take too much for him. He shall pay for him that"
      },
      {
        "lineNumber": 80,
        "text": "hath him, and that soundly."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 81,
        "text": "Thou dost me yet but little hurt. Thou wilt"
      },
      {
        "lineNumber": 82,
        "text": "anon; I know it by thy trembling. Now Prosper"
      },
      {
        "lineNumber": 83,
        "text": "works upon thee."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 84,
        "text": "Come on your ways. Open your mouth."
      },
      {
        "lineNumber": 85,
        "text": "Here is that which will give language to you, cat."
      },
      {
        "lineNumber": 86,
        "text": "Open your mouth. This will shake your shaking, I"
      },
      {
        "lineNumber": 87,
        "text": "can tell you, and that soundly. [Caliban drinks.] You"
      },
      {
        "lineNumber": 88,
        "text": "cannot tell who's your friend. Open your chaps"
      },
      {
        "lineNumber": 89,
        "text": "again."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 90,
        "text": "I should know that voice. It should be--but"
      },
      {
        "lineNumber": 91,
        "text": "he is drowned, and these are devils. O, defend me!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 92,
        "text": "Four legs and two voices--a most delicate"
      },
      {
        "lineNumber": 93,
        "text": "monster! His forward voice now is to speak well of"
      },
      {
        "lineNumber": 94,
        "text": "his friend. His backward voice is to utter foul"
      },
      {
        "lineNumber": 95,
        "text": "speeches and to detract. If all the wine in my bottle"
      },
      {
        "lineNumber": 96,
        "text": "will recover him, I will help his ague. Come."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 97,
        "text": "other mouth."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 98,
        "text": "Stephano!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 99,
        "text": "Doth thy other mouth call me? Mercy, mercy,"
      },
      {
        "lineNumber": 100,
        "text": "this is a devil, and no monster! I will leave him; I"
      },
      {
        "lineNumber": 101,
        "text": "have no long spoon."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 102,
        "text": "Stephano! If thou be'st Stephano, touch me"
      },
      {
        "lineNumber": 103,
        "text": "and speak to me, for I am Trinculo--be not"
      },
      {
        "lineNumber": 104,
        "text": "afeard--thy good friend Trinculo."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 105,
        "text": "If thou be'st Trinculo, come forth. I'll pull"
      },
      {
        "lineNumber": 106,
        "text": "thee by the lesser legs. If any be Trinculo's legs,"
      },
      {
        "lineNumber": 107,
        "text": "these are they. [He pulls him out from under Caliban's"
      },
      {
        "lineNumber": 108,
        "text": "cloak.] Thou art very Trinculo indeed. How"
      },
      {
        "lineNumber": 109,
        "text": "cam'st thou to be the siege of this mooncalf? Can"
      },
      {
        "lineNumber": 110,
        "text": "he vent Trinculos?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 111,
        "text": "I took him to be killed with a thunderstroke."
      },
      {
        "lineNumber": 112,
        "text": "But art thou not drowned, Stephano? I"
      },
      {
        "lineNumber": 113,
        "text": "hope now thou art not drowned. Is the storm"
      },
      {
        "lineNumber": 114,
        "text": "overblown? I hid me under the dead mooncalf's"
      },
      {
        "lineNumber": 115,
        "text": "gaberdine for fear of the storm. And art thou living,"
      },
      {
        "lineNumber": 116,
        "text": "Stephano? O Stephano, two Neapolitans scaped!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 117,
        "text": "Prithee, do not turn me about. My stomach"
      },
      {
        "lineNumber": 118,
        "text": "is not constant."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 119,
        "text": "CALIBAN, [aside]  These be fine things, an if they be not"
      },
      {
        "lineNumber": 120,
        "text": "sprites. That's a brave god and bears celestial liquor."
      },
      {
        "lineNumber": 121,
        "text": "I will kneel to him."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 122,
        "text": "STEPHANO, [to Trinculo]  How didst thou scape? How"
      },
      {
        "lineNumber": 123,
        "text": "cam'st thou hither? Swear by this bottle how thou"
      },
      {
        "lineNumber": 124,
        "text": "cam'st hither--I escaped upon a butt of sack, which"
      },
      {
        "lineNumber": 125,
        "text": "the sailors heaved o'erboard--by this bottle, which"
      },
      {
        "lineNumber": 126,
        "text": "I made of the bark of a tree with mine own hands,"
      },
      {
        "lineNumber": 127,
        "text": "since I was cast ashore."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 128,
        "text": "I'll swear upon that bottle to be thy true"
      },
      {
        "lineNumber": 129,
        "text": "subject, for the liquor is not earthly."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 130,
        "text": "STEPHANO, [to Trinculo]  Here. Swear then how thou"
      },
      {
        "lineNumber": 131,
        "text": "escapedst."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 132,
        "text": "Swum ashore, man, like a duck. I can swim"
      },
      {
        "lineNumber": 133,
        "text": "like a duck, I'll be sworn."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 134,
        "text": "Though thou canst swim like a duck, thou art made"
      },
      {
        "lineNumber": 135,
        "text": "like a goose."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 136,
        "text": "O Stephano, hast any more of this?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 137,
        "text": "The whole butt, man. My cellar is in a rock"
      },
      {
        "lineNumber": 138,
        "text": "by th' seaside, where my wine is hid.--How now,"
      },
      {
        "lineNumber": 139,
        "text": "mooncalf, how does thine ague?"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 140,
        "text": "Hast thou not dropped from heaven?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 141,
        "text": "Out o' th' moon, I do assure thee. I was the"
      },
      {
        "lineNumber": 142,
        "text": "man i' th' moon when time was."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 143,
        "text": "I have seen thee in her, and I do adore thee."
      },
      {
        "lineNumber": 144,
        "text": "My mistress showed me thee, and thy dog, and thy"
      },
      {
        "lineNumber": 145,
        "text": "bush."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 146,
        "text": "Come, swear to that. Kiss the book. I will"
      },
      {
        "lineNumber": 147,
        "text": "furnish it anon with new contents. Swear."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 148,
        "text": "By this good light, this is a very shallow"
      },
      {
        "lineNumber": 149,
        "text": "monster. I afeard of him? A very weak monster. The"
      },
      {
        "lineNumber": 150,
        "text": "man i' th' moon? A most poor, credulous monster!"
      },
      {
        "lineNumber": 151,
        "text": "--Well drawn, monster, in good sooth!"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 152,
        "text": "I'll show thee every fertile inch o' th' island,"
      },
      {
        "lineNumber": 153,
        "text": "and I will kiss thy foot. I prithee, be my god."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 154,
        "text": "By this light, a most perfidious and drunken"
      },
      {
        "lineNumber": 155,
        "text": "monster. When 's god's asleep, he'll rob his bottle."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 156,
        "text": "I'll kiss thy foot. I'll swear myself thy subject."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 157,
        "text": "Come on, then. Down, and swear."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 158,
        "text": "I shall laugh myself to death at this puppy-headed"
      },
      {
        "lineNumber": 159,
        "text": "monster. A most scurvy monster. I could"
      },
      {
        "lineNumber": 160,
        "text": "find in my heart to beat him--"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 161,
        "text": "Come, kiss."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 162,
        "text": "--but that the poor monster's in drink. An"
      },
      {
        "lineNumber": 163,
        "text": "abominable monster."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 164,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 165,
        "text": "I'll show thee the best springs. I'll pluck thee berries."
      },
      {
        "lineNumber": 166,
        "text": "I'll fish for thee and get thee wood enough."
      },
      {
        "lineNumber": 167,
        "text": "A plague upon the tyrant that I serve."
      },
      {
        "lineNumber": 168,
        "text": "I'll bear him no more sticks, but follow thee,"
      },
      {
        "lineNumber": 169,
        "text": "Thou wondrous man."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 170,
        "text": "A most ridiculous monster, to make a wonder"
      },
      {
        "lineNumber": 171,
        "text": "of a poor drunkard."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 172,
        "text": "I prithee, let me bring thee where crabs grow,"
      },
      {
        "lineNumber": 173,
        "text": "And I with my long nails will dig thee pignuts,"
      },
      {
        "lineNumber": 174,
        "text": "Show thee a jay's nest, and instruct thee how"
      },
      {
        "lineNumber": 175,
        "text": "To snare the nimble marmoset. I'll bring thee"
      },
      {
        "lineNumber": 176,
        "text": "To clustering filberts, and sometimes I'll get thee"
      },
      {
        "lineNumber": 177,
        "text": "Young scamels from the rock. Wilt thou go with me?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 178,
        "text": "I prithee now, lead the way without any"
      },
      {
        "lineNumber": 179,
        "text": "more talking.--Trinculo, the King and all our"
      },
      {
        "lineNumber": 180,
        "text": "company else being drowned, we will inherit here."
      },
      {
        "lineNumber": 181,
        "text": "--Here, bear my bottle.--Fellow Trinculo, we'll"
      },
      {
        "lineNumber": 182,
        "text": "fill him by and by again."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 183,
        "text": "Farewell, master, farewell, farewell."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 184,
        "text": "A howling monster, a drunken monster."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 185,
        "text": "No more dams I'll make for fish,"
      },
      {
        "lineNumber": 186,
        "text": "Nor fetch in firing"
      },
      {
        "lineNumber": 187,
        "text": "At requiring,"
      },
      {
        "lineNumber": 188,
        "text": "Nor scrape trenchering, nor wash dish."
      },
      {
        "lineNumber": 189,
        "text": "'Ban, 'ban, Ca-caliban"
      },
      {
        "lineNumber": 190,
        "text": "Has a new master. Get a new man."
      },
      {
        "lineNumber": 191,
        "text": "Freedom, high-day! High-day, freedom! Freedom,"
      },
      {
        "lineNumber": 192,
        "text": "high-day, freedom!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 193,
        "text": "O brave monster! Lead the way."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 194,
        "text": "====="
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Caliban with a burden of wood. A noise o"
  },
  {
    "position": 1,
    "text": "hunder heard."
  },
  {
    "position": 2,
    "text": "He lies down and covers himself with a cloak."
  },
  {
    "position": 2,
    "text": "Enter Trinculo."
  },
  {
    "position": 3,
    "text": "annot choose but fall by pailfuls. [Noticing Caliban."
  },
  {
    "position": 4,
    "text": "Thunder.] Alas, the storm is come again. My bes"
  },
  {
    "position": 5,
    "text": "He crawls under Caliban's cloak."
  },
  {
    "position": 5,
    "text": "Enter Stephano singing."
  },
  {
    "position": 6,
    "text": "ell, here's my comfort.\t[Drinks."
  },
  {
    "position": 6,
    "text": "Sings."
  },
  {
    "position": 7,
    "text": "Drinks."
  },
  {
    "position": 17,
    "text": "Caliban drinks.] Amen! I will pour some in th"
  },
  {
    "position": 25,
    "text": "He crawls out from under the cloak."
  },
  {
    "position": 29,
    "text": "TEPHANO  Here, kiss the book.\t[Trinculo drinks."
  },
  {
    "position": 36,
    "text": "Caliban drinks."
  },
  {
    "position": 41,
    "text": "Caliban kneels."
  },
  {
    "position": 46,
    "text": "ALIBAN, [standing"
  },
  {
    "position": 48,
    "text": "ALIBAN [sings drunkenly"
  },
  {
    "position": 50,
    "text": "ALIBAN [sings"
  },
  {
    "position": 52,
    "text": "They exit."
  }
],
  autoInsights: {}
};

const the_tempest_3_1: SceneData = {
  playTitle: 'The Tempest',
  act: 3,
  scene: 1,
  speeches: [
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 2,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 3,
        "text": "There be some sports are painful, and their labor"
      },
      {
        "lineNumber": 4,
        "text": "Delight in them sets off; some kinds of baseness"
      },
      {
        "lineNumber": 5,
        "text": "Are nobly undergone; and most poor matters"
      },
      {
        "lineNumber": 6,
        "text": "Point to rich ends. This my mean task"
      },
      {
        "lineNumber": 7,
        "text": "Would be as heavy to me as odious, but"
      },
      {
        "lineNumber": 8,
        "text": "The mistress which I serve quickens what's dead"
      },
      {
        "lineNumber": 9,
        "text": "And makes my labors pleasures. O, she is"
      },
      {
        "lineNumber": 10,
        "text": "Ten times more gentle than her father's crabbed,"
      },
      {
        "lineNumber": 11,
        "text": "And he's composed of harshness. I must remove"
      },
      {
        "lineNumber": 12,
        "text": "Some thousands of these logs and pile them up,"
      },
      {
        "lineNumber": 13,
        "text": "Upon a sore injunction. My sweet mistress"
      },
      {
        "lineNumber": 14,
        "text": "Weeps when she sees me work, and says such"
      },
      {
        "lineNumber": 15,
        "text": "baseness"
      },
      {
        "lineNumber": 16,
        "text": "Had never like executor. I forget;"
      },
      {
        "lineNumber": 17,
        "text": "But these sweet thoughts do even refresh my labors,"
      },
      {
        "lineNumber": 18,
        "text": "Most busiest when I do it."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 19,
        "text": "Alas now, pray you,"
      },
      {
        "lineNumber": 20,
        "text": "Work not so hard. I would the lightning had"
      },
      {
        "lineNumber": 21,
        "text": "Burnt up those logs that you are enjoined to pile."
      },
      {
        "lineNumber": 22,
        "text": "Pray, set it down and rest you. When this burns"
      },
      {
        "lineNumber": 23,
        "text": "'Twill weep for having wearied you. My father"
      },
      {
        "lineNumber": 24,
        "text": "Is hard at study. Pray now, rest yourself."
      },
      {
        "lineNumber": 25,
        "text": "He's safe for these three hours."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 26,
        "text": "O most dear mistress,"
      },
      {
        "lineNumber": 27,
        "text": "The sun will set before I shall discharge"
      },
      {
        "lineNumber": 28,
        "text": "What I must strive to do."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 29,
        "text": "If you'll sit down,"
      },
      {
        "lineNumber": 30,
        "text": "I'll bear your logs the while. Pray, give me that."
      },
      {
        "lineNumber": 31,
        "text": "I'll carry it to the pile."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 32,
        "text": "No, precious creature,"
      },
      {
        "lineNumber": 33,
        "text": "I had rather crack my sinews, break my back,"
      },
      {
        "lineNumber": 34,
        "text": "Than you should such dishonor undergo"
      },
      {
        "lineNumber": 35,
        "text": "While I sit lazy by."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 36,
        "text": "It would become me"
      },
      {
        "lineNumber": 37,
        "text": "As well as it does you, and I should do it"
      },
      {
        "lineNumber": 38,
        "text": "With much more ease, for my good will is to it,"
      },
      {
        "lineNumber": 39,
        "text": "And yours it is against."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 40,
        "text": "PROSPERO, [aside]  Poor worm, thou art infected."
      },
      {
        "lineNumber": 41,
        "text": "This visitation shows it."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 42,
        "text": "You look wearily."
      },
      {
        "lineNumber": 43,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 44,
        "text": "No, noble mistress, 'tis fresh morning with me"
      },
      {
        "lineNumber": 45,
        "text": "When you are by at night. I do beseech you,"
      },
      {
        "lineNumber": 46,
        "text": "Chiefly that I might set it in my prayers,"
      },
      {
        "lineNumber": 47,
        "text": "What is your name?"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 48,
        "text": "Miranda.--O my father,"
      },
      {
        "lineNumber": 49,
        "text": "I have broke your hest to say so!"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 50,
        "text": "Admired Miranda!"
      },
      {
        "lineNumber": 51,
        "text": "Indeed the top of admiration, worth"
      },
      {
        "lineNumber": 52,
        "text": "What's dearest to the world! Full many a lady"
      },
      {
        "lineNumber": 53,
        "text": "I have eyed with best regard, and many a time"
      },
      {
        "lineNumber": 54,
        "text": "Th' harmony of their tongues hath into bondage"
      },
      {
        "lineNumber": 55,
        "text": "Brought my too diligent ear. For several virtues"
      },
      {
        "lineNumber": 56,
        "text": "Have I liked several women, never any"
      },
      {
        "lineNumber": 57,
        "text": "With so full soul but some defect in her"
      },
      {
        "lineNumber": 58,
        "text": "Did quarrel with the noblest grace she owed,"
      },
      {
        "lineNumber": 59,
        "text": "And put it to the foil. But you, O you,"
      },
      {
        "lineNumber": 60,
        "text": "So perfect and so peerless, are created"
      },
      {
        "lineNumber": 61,
        "text": "Of every creature's best."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 62,
        "text": "I do not know"
      },
      {
        "lineNumber": 63,
        "text": "One of my sex, no woman's face remember,"
      },
      {
        "lineNumber": 64,
        "text": "Save, from my glass, mine own. Nor have I seen"
      },
      {
        "lineNumber": 65,
        "text": "More that I may call men than you, good friend,"
      },
      {
        "lineNumber": 66,
        "text": "And my dear father. How features are abroad"
      },
      {
        "lineNumber": 67,
        "text": "I am skilless of, but by my modesty,"
      },
      {
        "lineNumber": 68,
        "text": "The jewel in my dower, I would not wish"
      },
      {
        "lineNumber": 69,
        "text": "Any companion in the world but you,"
      },
      {
        "lineNumber": 70,
        "text": "Nor can imagination form a shape"
      },
      {
        "lineNumber": 71,
        "text": "Besides yourself to like of. But I prattle"
      },
      {
        "lineNumber": 72,
        "text": "Something too wildly, and my father's precepts"
      },
      {
        "lineNumber": 73,
        "text": "I therein do forget."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 74,
        "text": "I am in my condition"
      },
      {
        "lineNumber": 75,
        "text": "A prince, Miranda; I do think a king--"
      },
      {
        "lineNumber": 76,
        "text": "I would, not so!--and would no more endure"
      },
      {
        "lineNumber": 77,
        "text": "This wooden slavery than to suffer"
      },
      {
        "lineNumber": 78,
        "text": "The flesh-fly blow my mouth. Hear my soul speak:"
      },
      {
        "lineNumber": 79,
        "text": "The very instant that I saw you did"
      },
      {
        "lineNumber": 80,
        "text": "My heart fly to your service, there resides"
      },
      {
        "lineNumber": 81,
        "text": "To make me slave to it, and for your sake"
      },
      {
        "lineNumber": 82,
        "text": "Am I this patient log-man."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 83,
        "text": "Do you love me?"
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 84,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 85,
        "text": "O heaven, O Earth, bear witness to this sound,"
      },
      {
        "lineNumber": 86,
        "text": "And crown what I profess with kind event"
      },
      {
        "lineNumber": 87,
        "text": "If I speak true; if hollowly, invert"
      },
      {
        "lineNumber": 88,
        "text": "What best is boded me to mischief. I,"
      },
      {
        "lineNumber": 89,
        "text": "Beyond all limit of what else i' th' world,"
      },
      {
        "lineNumber": 90,
        "text": "Do love, prize, honor you."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 91,
        "text": "I am a fool"
      },
      {
        "lineNumber": 92,
        "text": "To weep at what I am glad of."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 93,
        "text": "PROSPERO, [aside]  Fair encounter"
      },
      {
        "lineNumber": 94,
        "text": "Of two most rare affections. Heavens rain grace"
      },
      {
        "lineNumber": 95,
        "text": "On that which breeds between 'em!"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 96,
        "text": "Wherefore"
      },
      {
        "lineNumber": 97,
        "text": "weep you?"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 98,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 99,
        "text": "At mine unworthiness, that dare not offer"
      },
      {
        "lineNumber": 100,
        "text": "What I desire to give, and much less take"
      },
      {
        "lineNumber": 101,
        "text": "What I shall die to want. But this is trifling,"
      },
      {
        "lineNumber": 102,
        "text": "And all the more it seeks to hide itself,"
      },
      {
        "lineNumber": 103,
        "text": "The bigger bulk it shows. Hence, bashful cunning,"
      },
      {
        "lineNumber": 104,
        "text": "And prompt me, plain and holy innocence."
      },
      {
        "lineNumber": 105,
        "text": "I am your wife if you will marry me."
      },
      {
        "lineNumber": 106,
        "text": "If not, I'll die your maid. To be your fellow"
      },
      {
        "lineNumber": 107,
        "text": "You may deny me, but I'll be your servant"
      },
      {
        "lineNumber": 108,
        "text": "Whether you will or no."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 109,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 110,
        "text": "My mistress, dearest, and I thus humble ever."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 111,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 112,
        "text": "My husband, then?"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 113,
        "text": "Ay, with a heart as willing"
      },
      {
        "lineNumber": 114,
        "text": "As bondage e'er of freedom. Here's my hand."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 115,
        "text": "And mine, with my heart in 't. And now farewell"
      },
      {
        "lineNumber": 116,
        "text": "Till half an hour hence."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 117,
        "text": "A thousand thousand."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 118,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 119,
        "text": "So glad of this as they I cannot be,"
      },
      {
        "lineNumber": 120,
        "text": "Who are surprised withal; but my rejoicing"
      },
      {
        "lineNumber": 121,
        "text": "At nothing can be more. I'll to my book,"
      },
      {
        "lineNumber": 122,
        "text": "For yet ere suppertime must I perform"
      },
      {
        "lineNumber": 123,
        "text": "Much business appertaining."
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Ferdinand bearing a log."
  },
  {
    "position": 2,
    "text": "Enter Miranda; and Prospero at a distance, unobserved."
  },
  {
    "position": 22,
    "text": "IRANDA, [clasping his hand"
  },
  {
    "position": 24,
    "text": "They exit."
  },
  {
    "position": 25,
    "text": "He exits."
  }
],
  autoInsights: {}
};

const the_tempest_3_2: SceneData = {
  playTitle: 'The Tempest',
  act: 3,
  scene: 2,
  speeches: [
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 2,
        "text": "STEPHANO, [to Trinculo]  Tell not me. When the butt is"
      },
      {
        "lineNumber": 3,
        "text": "out, we will drink water; not a drop before. Therefore"
      },
      {
        "lineNumber": 4,
        "text": "bear up and board 'em.--Servant monster,"
      },
      {
        "lineNumber": 5,
        "text": "drink to me."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 6,
        "text": "Servant monster? The folly of this island!"
      },
      {
        "lineNumber": 7,
        "text": "They say there's but five upon this isle; we are three"
      },
      {
        "lineNumber": 8,
        "text": "of them. If th' other two be brained like us, the state"
      },
      {
        "lineNumber": 9,
        "text": "totters."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 10,
        "text": "Drink, servant monster, when I bid thee."
      },
      {
        "lineNumber": 11,
        "text": "Thy eyes are almost set in thy head."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 12,
        "text": "Where should they be set else? He were a"
      },
      {
        "lineNumber": 13,
        "text": "brave monster indeed if they were set in his tail."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 14,
        "text": "My man-monster hath drowned his tongue"
      },
      {
        "lineNumber": 15,
        "text": "in sack. For my part, the sea cannot drown me. I"
      },
      {
        "lineNumber": 16,
        "text": "swam, ere I could recover the shore, five-and-thirty"
      },
      {
        "lineNumber": 17,
        "text": "leagues off and on, by this light.--Thou shalt be my"
      },
      {
        "lineNumber": 18,
        "text": "lieutenant, monster, or my standard."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 19,
        "text": "Your lieutenant, if you list. He's no"
      },
      {
        "lineNumber": 20,
        "text": "standard."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 21,
        "text": "We'll not run, Monsieur Monster."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 22,
        "text": "Nor go neither. But you'll lie like dogs, and"
      },
      {
        "lineNumber": 23,
        "text": "yet say nothing neither."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 24,
        "text": "Mooncalf, speak once in thy life, if thou"
      },
      {
        "lineNumber": 25,
        "text": "be'st a good mooncalf."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 26,
        "text": "How does thy Honor? Let me lick thy shoe. I'll"
      },
      {
        "lineNumber": 27,
        "text": "not serve him; he is not valiant."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 28,
        "text": "Thou liest, most ignorant monster. I am in"
      },
      {
        "lineNumber": 29,
        "text": "case to justle a constable. Why, thou debauched"
      },
      {
        "lineNumber": 30,
        "text": "fish, thou! Was there ever man a coward that hath"
      },
      {
        "lineNumber": 31,
        "text": "drunk so much sack as I today? Wilt thou tell a"
      },
      {
        "lineNumber": 32,
        "text": "monstrous lie, being but half a fish and half a"
      },
      {
        "lineNumber": 33,
        "text": "monster?"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 34,
        "text": "Lo, how he mocks me! Wilt thou let him, my"
      },
      {
        "lineNumber": 35,
        "text": "lord?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 36,
        "text": "\"Lord,\" quoth he? That a monster should be"
      },
      {
        "lineNumber": 37,
        "text": "such a natural!"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 38,
        "text": "Lo, lo again! Bite him to death, I prithee."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 39,
        "text": "Trinculo, keep a good tongue in your head."
      },
      {
        "lineNumber": 40,
        "text": "If you prove a mutineer, the next tree. The poor"
      },
      {
        "lineNumber": 41,
        "text": "monster's my subject, and he shall not suffer"
      },
      {
        "lineNumber": 42,
        "text": "indignity."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 43,
        "text": "I thank my noble lord. Wilt thou be pleased"
      },
      {
        "lineNumber": 44,
        "text": "to harken once again to the suit I made to thee?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 45,
        "text": "Marry, will I. Kneel and repeat it. I will"
      },
      {
        "lineNumber": 46,
        "text": "stand, and so shall Trinculo."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 47,
        "text": "CALIBAN, [kneeling]  As I told thee before, I am subject"
      },
      {
        "lineNumber": 48,
        "text": "to a tyrant, a sorcerer, that by his cunning hath"
      },
      {
        "lineNumber": 49,
        "text": "cheated me of the island."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 50,
        "text": "ARIEL, [in Trinculo's voice]  Thou liest."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 51,
        "text": "CALIBAN, [to Trinculo]  Thou liest, thou jesting monkey,"
      },
      {
        "lineNumber": 52,
        "text": "thou. [He stands.] I would my valiant master would"
      },
      {
        "lineNumber": 53,
        "text": "destroy thee. I do not lie."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 54,
        "text": "Trinculo, if you trouble him any more in 's"
      },
      {
        "lineNumber": 55,
        "text": "tale, by this hand, I will supplant some of your"
      },
      {
        "lineNumber": 56,
        "text": "teeth."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 57,
        "text": "Why, I said nothing."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 58,
        "text": "Mum then, and no more. [Trinculo stands"
      },
      {
        "lineNumber": 59,
        "text": "aside.] Proceed."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 60,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 61,
        "text": "I say by sorcery he got this isle;"
      },
      {
        "lineNumber": 62,
        "text": "From me he got it. If thy Greatness will,"
      },
      {
        "lineNumber": 63,
        "text": "Revenge it on him, for I know thou dar'st,"
      },
      {
        "lineNumber": 64,
        "text": "But this thing dare not."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 65,
        "text": "That's most certain."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 66,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 67,
        "text": "Thou shalt be lord of it, and I'll serve thee."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 68,
        "text": "How now shall this be compassed? Canst"
      },
      {
        "lineNumber": 69,
        "text": "thou bring me to the party?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 70,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 71,
        "text": "Yea, yea, my lord. I'll yield him thee asleep,"
      },
      {
        "lineNumber": 72,
        "text": "Where thou mayst knock a nail into his head."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 73,
        "text": "ARIEL, [in Trinculo's voice]  Thou liest. Thou canst not."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 74,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 75,
        "text": "What a pied ninny's this!--Thou scurvy patch!--"
      },
      {
        "lineNumber": 76,
        "text": "I do beseech thy Greatness, give him blows"
      },
      {
        "lineNumber": 77,
        "text": "And take his bottle from him. When that's gone,"
      },
      {
        "lineNumber": 78,
        "text": "He shall drink naught but brine, for I'll not show him"
      },
      {
        "lineNumber": 79,
        "text": "Where the quick freshes are."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 80,
        "text": "Trinculo, run into no further danger. Interrupt"
      },
      {
        "lineNumber": 81,
        "text": "the monster one word further, and by this"
      },
      {
        "lineNumber": 82,
        "text": "hand, I'll turn my mercy out o' doors and make a"
      },
      {
        "lineNumber": 83,
        "text": "stockfish of thee."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 84,
        "text": "Why, what did I? I did nothing. I'll go"
      },
      {
        "lineNumber": 85,
        "text": "farther off."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 86,
        "text": "Didst thou not say he lied?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 87,
        "text": "ARIEL, [in Trinculo's voice]  Thou liest."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 88,
        "text": "As you like this, give me the lie another time."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 89,
        "text": "I did not give the lie! Out o' your wits and"
      },
      {
        "lineNumber": 90,
        "text": "hearing too? A pox o' your bottle! This can sack and"
      },
      {
        "lineNumber": 91,
        "text": "drinking do. A murrain on your monster, and the"
      },
      {
        "lineNumber": 92,
        "text": "devil take your fingers!"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 93,
        "text": "Ha, ha, ha!"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 94,
        "text": "Prithee, stand further off."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 95,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 96,
        "text": "Beat him enough. After a little time"
      },
      {
        "lineNumber": 97,
        "text": "I'll beat him too."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 98,
        "text": "Stand farther. [Trinculo moves farther"
      },
      {
        "lineNumber": 99,
        "text": "away.] Come, proceed."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 100,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 101,
        "text": "Why, as I told thee, 'tis a custom with him"
      },
      {
        "lineNumber": 102,
        "text": "I' th' afternoon to sleep. There thou mayst brain him,"
      },
      {
        "lineNumber": 103,
        "text": "Having first seized his books, or with a log"
      },
      {
        "lineNumber": 104,
        "text": "Batter his skull, or paunch him with a stake,"
      },
      {
        "lineNumber": 105,
        "text": "Or cut his weasand with thy knife. Remember"
      },
      {
        "lineNumber": 106,
        "text": "First to possess his books, for without them"
      },
      {
        "lineNumber": 107,
        "text": "He's but a sot, as I am, nor hath not"
      },
      {
        "lineNumber": 108,
        "text": "One spirit to command. They all do hate him"
      },
      {
        "lineNumber": 109,
        "text": "As rootedly as I. Burn but his books."
      },
      {
        "lineNumber": 110,
        "text": "He has brave utensils--for so he calls them--"
      },
      {
        "lineNumber": 111,
        "text": "Which, when he has a house, he'll deck withal."
      },
      {
        "lineNumber": 112,
        "text": "And that most deeply to consider is"
      },
      {
        "lineNumber": 113,
        "text": "The beauty of his daughter. He himself"
      },
      {
        "lineNumber": 114,
        "text": "Calls her a nonpareil. I never saw a woman"
      },
      {
        "lineNumber": 115,
        "text": "But only Sycorax my dam and she;"
      },
      {
        "lineNumber": 116,
        "text": "But she as far surpasseth Sycorax"
      },
      {
        "lineNumber": 117,
        "text": "As great'st does least."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 118,
        "text": "Is it so brave a lass?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 119,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 120,
        "text": "Ay, lord, she will become thy bed, I warrant,"
      },
      {
        "lineNumber": 121,
        "text": "And bring thee forth brave brood."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 122,
        "text": "Monster, I will kill this man. His daughter"
      },
      {
        "lineNumber": 123,
        "text": "and I will be king and queen--save our Graces!--"
      },
      {
        "lineNumber": 124,
        "text": "and Trinculo and thyself shall be viceroys.--Dost"
      },
      {
        "lineNumber": 125,
        "text": "thou like the plot, Trinculo?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 126,
        "text": "Excellent."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 127,
        "text": "Give me thy hand. I am sorry I beat thee."
      },
      {
        "lineNumber": 128,
        "text": "But while thou liv'st, keep a good tongue in thy"
      },
      {
        "lineNumber": 129,
        "text": "head."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 130,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 131,
        "text": "Within this half hour will he be asleep."
      },
      {
        "lineNumber": 132,
        "text": "Wilt thou destroy him then?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 133,
        "text": "Ay, on mine honor."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 134,
        "text": "ARIEL, [aside]  This will I tell my master."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 135,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 136,
        "text": "Thou mak'st me merry. I am full of pleasure."
      },
      {
        "lineNumber": 137,
        "text": "Let us be jocund. Will you troll the catch"
      },
      {
        "lineNumber": 138,
        "text": "You taught me but whilere?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 139,
        "text": "At thy request, monster, I will do reason,"
      },
      {
        "lineNumber": 140,
        "text": "any reason.--Come on, Trinculo, let us sing."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 141,
        "text": "Flout 'em and cout 'em"
      },
      {
        "lineNumber": 142,
        "text": "And scout 'em and flout 'em!"
      },
      {
        "lineNumber": 143,
        "text": "Thought is free."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 144,
        "text": "That's not the tune."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 145,
        "text": "What is this same?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 146,
        "text": "This is the tune of our catch played by the"
      },
      {
        "lineNumber": 147,
        "text": "picture of Nobody."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 148,
        "text": "STEPHANO, [to the invisible musician]  If thou be'st a"
      },
      {
        "lineNumber": 149,
        "text": "man, show thyself in thy likeness. If thou be'st a"
      },
      {
        "lineNumber": 150,
        "text": "devil, take 't as thou list."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 151,
        "text": "O, forgive me my sins!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 152,
        "text": "He that dies pays all debts.--I defy thee!--"
      },
      {
        "lineNumber": 153,
        "text": "Mercy upon us!"
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 154,
        "text": "Art thou afeard?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 155,
        "text": "No, monster, not I."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 156,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 157,
        "text": "Be not afeard. The isle is full of noises,"
      },
      {
        "lineNumber": 158,
        "text": "Sounds and sweet airs that give delight and hurt not."
      },
      {
        "lineNumber": 159,
        "text": "Sometimes a thousand twangling instruments"
      },
      {
        "lineNumber": 160,
        "text": "Will hum about mine ears, and sometimes voices"
      },
      {
        "lineNumber": 161,
        "text": "That, if I then had waked after long sleep,"
      },
      {
        "lineNumber": 162,
        "text": "Will make me sleep again; and then, in dreaming,"
      },
      {
        "lineNumber": 163,
        "text": "The clouds methought would open, and show riches"
      },
      {
        "lineNumber": 164,
        "text": "Ready to drop upon me, that when I waked"
      },
      {
        "lineNumber": 165,
        "text": "I cried to dream again."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 166,
        "text": "This will prove a brave kingdom to me,"
      },
      {
        "lineNumber": 167,
        "text": "where I shall have my music for nothing."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 168,
        "text": "When Prospero is destroyed."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 169,
        "text": "That shall be by and by. I remember the"
      },
      {
        "lineNumber": 170,
        "text": "story."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 171,
        "text": "The sound is going away. Let's follow it, and"
      },
      {
        "lineNumber": 172,
        "text": "after do our work."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 173,
        "text": "Lead, monster. We'll follow.--I would I"
      },
      {
        "lineNumber": 174,
        "text": "could see this taborer. He lays it on. Wilt come?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 175,
        "text": "I'll follow, Stephano."
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Caliban, Stephano, and Trinculo."
  },
  {
    "position": 4,
    "text": "Caliban drinks."
  },
  {
    "position": 18,
    "text": "Enter Ariel, invisible."
  },
  {
    "position": 35,
    "text": "TEPHANO  Do I so? Take thou that.\t[He beats Trinculo."
  },
  {
    "position": 38,
    "text": "TEPHANO  Now forward with your tale. [To Trinculo."
  },
  {
    "position": 52,
    "text": "Sings."
  },
  {
    "position": 54,
    "text": "Ariel plays the tune on a tabor and pipe."
  },
  {
    "position": 68,
    "text": "They exit."
  }
],
  autoInsights: {}
};

const the_tempest_3_3: SceneData = {
  playTitle: 'The Tempest',
  act: 3,
  scene: 3,
  speeches: [
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 2,
        "text": "GONZALO"
      },
      {
        "lineNumber": 3,
        "text": "By 'r lakin, I can go no further, sir."
      },
      {
        "lineNumber": 4,
        "text": "My old bones aches. Here's a maze trod indeed"
      },
      {
        "lineNumber": 5,
        "text": "Through forthrights and meanders. By your"
      },
      {
        "lineNumber": 6,
        "text": "patience,"
      },
      {
        "lineNumber": 7,
        "text": "I needs must rest me."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 8,
        "text": "Old lord, I cannot blame thee."
      },
      {
        "lineNumber": 9,
        "text": "Who am myself attached with weariness"
      },
      {
        "lineNumber": 10,
        "text": "To th' dulling of my spirits. Sit down and rest."
      },
      {
        "lineNumber": 11,
        "text": "Even here I will put off my hope and keep it"
      },
      {
        "lineNumber": 12,
        "text": "No longer for my flatterer. He is drowned"
      },
      {
        "lineNumber": 13,
        "text": "Whom thus we stray to find, and the sea mocks"
      },
      {
        "lineNumber": 14,
        "text": "Our frustrate search on land. Well, let him go."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 15,
        "text": "I am right glad that he's so out of hope."
      },
      {
        "lineNumber": 16,
        "text": "Do not, for one repulse, forgo the purpose"
      },
      {
        "lineNumber": 17,
        "text": "That you resolved t' effect."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 18,
        "text": "SEBASTIAN, [aside to Antonio]  The next advantage"
      },
      {
        "lineNumber": 19,
        "text": "Will we take throughly."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 20,
        "text": "ANTONIO, [aside to Sebastian]  Let it be tonight;"
      },
      {
        "lineNumber": 21,
        "text": "For now they are oppressed with travel, they"
      },
      {
        "lineNumber": 22,
        "text": "Will not nor cannot use such vigilance"
      },
      {
        "lineNumber": 23,
        "text": "As when they are fresh."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 24,
        "text": "SEBASTIAN, [aside to Antonio]  I say tonight. No more."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 25,
        "text": "ALONSO"
      },
      {
        "lineNumber": 26,
        "text": "What harmony is this? My good friends, hark."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 27,
        "text": "Marvelous sweet music!"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 28,
        "text": "ALONSO"
      },
      {
        "lineNumber": 29,
        "text": "Give us kind keepers, heavens! What were these?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 30,
        "text": "SEBASTIAN"
      },
      {
        "lineNumber": 31,
        "text": "A living drollery! Now I will believe"
      },
      {
        "lineNumber": 32,
        "text": "That there are unicorns, that in Arabia"
      },
      {
        "lineNumber": 33,
        "text": "There is one tree, the phoenix' throne, one phoenix"
      },
      {
        "lineNumber": 34,
        "text": "At this hour reigning there."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 35,
        "text": "I'll believe both;"
      },
      {
        "lineNumber": 36,
        "text": "And what does else want credit, come to me"
      },
      {
        "lineNumber": 37,
        "text": "And I'll be sworn 'tis true. Travelers ne'er did lie,"
      },
      {
        "lineNumber": 38,
        "text": "Though fools at home condemn 'em."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 39,
        "text": "If in Naples"
      },
      {
        "lineNumber": 40,
        "text": "I should report this now, would they believe me?"
      },
      {
        "lineNumber": 41,
        "text": "If I should say I saw such islanders--"
      },
      {
        "lineNumber": 42,
        "text": "For, certes, these are people of the island--"
      },
      {
        "lineNumber": 43,
        "text": "Who, though they are of monstrous shape, yet note"
      },
      {
        "lineNumber": 44,
        "text": "Their manners are more gentle, kind, than of"
      },
      {
        "lineNumber": 45,
        "text": "Our human generation you shall find"
      },
      {
        "lineNumber": 46,
        "text": "Many, nay, almost any."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 47,
        "text": "PROSPERO, [aside]  Honest lord,"
      },
      {
        "lineNumber": 48,
        "text": "Thou hast said well, for some of you there present"
      },
      {
        "lineNumber": 49,
        "text": "Are worse than devils."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 50,
        "text": "I cannot too much muse"
      },
      {
        "lineNumber": 51,
        "text": "Such shapes, such gesture, and such sound,"
      },
      {
        "lineNumber": 52,
        "text": "expressing--"
      },
      {
        "lineNumber": 53,
        "text": "Although they want the use of tongue--a kind"
      },
      {
        "lineNumber": 54,
        "text": "Of excellent dumb discourse."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 55,
        "text": "PROSPERO, [aside]  Praise in departing."
      }
    ]
  },
  {
    "speaker": "FRANCISCO",
    "lines": [
      {
        "lineNumber": 56,
        "text": "They vanished strangely."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 57,
        "text": "No matter, since"
      },
      {
        "lineNumber": 58,
        "text": "They have left their viands behind, for we have"
      },
      {
        "lineNumber": 59,
        "text": "stomachs."
      },
      {
        "lineNumber": 60,
        "text": "Will 't please you taste of what is here?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 61,
        "text": "Not I."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 62,
        "text": "GONZALO"
      },
      {
        "lineNumber": 63,
        "text": "Faith, sir, you need not fear. When we were boys,"
      },
      {
        "lineNumber": 64,
        "text": "Who would believe that there were mountaineers"
      },
      {
        "lineNumber": 65,
        "text": "Dewlapped like bulls, whose throats had hanging at"
      },
      {
        "lineNumber": 66,
        "text": "'em"
      },
      {
        "lineNumber": 67,
        "text": "Wallets of flesh? Or that there were such men"
      },
      {
        "lineNumber": 68,
        "text": "Whose heads stood in their breasts? Which now we"
      },
      {
        "lineNumber": 69,
        "text": "find"
      },
      {
        "lineNumber": 70,
        "text": "Each putter-out of five for one will bring us"
      },
      {
        "lineNumber": 71,
        "text": "Good warrant of."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 72,
        "text": "I will stand to and feed."
      },
      {
        "lineNumber": 73,
        "text": "Although my last, no matter, since I feel"
      },
      {
        "lineNumber": 74,
        "text": "The best is past. Brother, my lord the Duke,"
      },
      {
        "lineNumber": 75,
        "text": "Stand to, and do as we."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 76,
        "text": "his wings upon the table, and with a quaint device the"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 77,
        "text": "You are three men of sin, whom Destiny,"
      },
      {
        "lineNumber": 78,
        "text": "That hath to instrument this lower world"
      },
      {
        "lineNumber": 79,
        "text": "And what is in 't, the never-surfeited sea"
      },
      {
        "lineNumber": 80,
        "text": "Hath caused to belch up you, and on this island,"
      },
      {
        "lineNumber": 81,
        "text": "Where man doth not inhabit, you 'mongst men"
      },
      {
        "lineNumber": 82,
        "text": "Being most unfit to live. I have made you mad;"
      },
      {
        "lineNumber": 83,
        "text": "And even with such-like valor, men hang and drown"
      },
      {
        "lineNumber": 84,
        "text": "Their proper selves."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 85,
        "text": "You fools, I and my fellows"
      },
      {
        "lineNumber": 86,
        "text": "Are ministers of Fate. The elements"
      },
      {
        "lineNumber": 87,
        "text": "Of whom your swords are tempered may as well"
      },
      {
        "lineNumber": 88,
        "text": "Wound the loud winds or with bemocked-at stabs"
      },
      {
        "lineNumber": 89,
        "text": "Kill the still-closing waters as diminish"
      },
      {
        "lineNumber": 90,
        "text": "One dowl that's in my plume. My fellow ministers"
      },
      {
        "lineNumber": 91,
        "text": "Are like invulnerable. If you could hurt,"
      },
      {
        "lineNumber": 92,
        "text": "Your swords are now too massy for your strengths"
      },
      {
        "lineNumber": 93,
        "text": "And will not be uplifted. But remember--"
      },
      {
        "lineNumber": 94,
        "text": "For that's my business to you--that you three"
      },
      {
        "lineNumber": 95,
        "text": "From Milan did supplant good Prospero,"
      },
      {
        "lineNumber": 96,
        "text": "Exposed unto the sea, which hath requit it,"
      },
      {
        "lineNumber": 97,
        "text": "Him and his innocent child, for which foul deed,"
      },
      {
        "lineNumber": 98,
        "text": "The powers--delaying, not forgetting--have"
      },
      {
        "lineNumber": 99,
        "text": "Incensed the seas and shores, yea, all the creatures"
      },
      {
        "lineNumber": 100,
        "text": "Against your peace. Thee of thy son, Alonso,"
      },
      {
        "lineNumber": 101,
        "text": "They have bereft; and do pronounce by me"
      },
      {
        "lineNumber": 102,
        "text": "Ling'ring perdition, worse than any death"
      },
      {
        "lineNumber": 103,
        "text": "Can be at once, shall step by step attend"
      },
      {
        "lineNumber": 104,
        "text": "You and your ways, whose wraths to guard you"
      },
      {
        "lineNumber": 105,
        "text": "from--"
      },
      {
        "lineNumber": 106,
        "text": "Which here, in this most desolate isle, else falls"
      },
      {
        "lineNumber": 107,
        "text": "Upon your heads--is nothing but heart's sorrow"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 108,
        "text": "Bravely the figure of this Harpy hast thou"
      },
      {
        "lineNumber": 109,
        "text": "Performed, my Ariel. A grace it had, devouring."
      },
      {
        "lineNumber": 110,
        "text": "Of my instruction hast thou nothing bated"
      },
      {
        "lineNumber": 111,
        "text": "In what thou hadst to say. So, with good life"
      },
      {
        "lineNumber": 112,
        "text": "And observation strange, my meaner ministers"
      },
      {
        "lineNumber": 113,
        "text": "Their several kinds have done. My high charms"
      },
      {
        "lineNumber": 114,
        "text": "work,"
      },
      {
        "lineNumber": 115,
        "text": "And these mine enemies are all knit up"
      },
      {
        "lineNumber": 116,
        "text": "In their distractions. They now are in my power;"
      },
      {
        "lineNumber": 117,
        "text": "And in these fits I leave them while I visit"
      },
      {
        "lineNumber": 118,
        "text": "Young Ferdinand, whom they suppose is drowned,"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 119,
        "text": "I' th' name of something holy, sir, why stand you"
      },
      {
        "lineNumber": 120,
        "text": "In this strange stare?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 121,
        "text": "O, it is monstrous, monstrous!"
      },
      {
        "lineNumber": 122,
        "text": "Methought the billows spoke and told me of it;"
      },
      {
        "lineNumber": 123,
        "text": "The winds did sing it to me, and the thunder,"
      },
      {
        "lineNumber": 124,
        "text": "That deep and dreadful organ pipe, pronounced"
      },
      {
        "lineNumber": 125,
        "text": "The name of Prosper. It did bass my trespass."
      },
      {
        "lineNumber": 126,
        "text": "Therefor my son i' th' ooze is bedded, and"
      },
      {
        "lineNumber": 127,
        "text": "I'll seek him deeper than e'er plummet sounded,"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 128,
        "text": "But one fiend at a time,"
      },
      {
        "lineNumber": 129,
        "text": "I'll fight their legions o'er."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 130,
        "text": "I'll be thy second."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 131,
        "text": "GONZALO"
      },
      {
        "lineNumber": 132,
        "text": "All three of them are desperate. Their great guilt,"
      },
      {
        "lineNumber": 133,
        "text": "Like poison given to work a great time after,"
      },
      {
        "lineNumber": 134,
        "text": "Now 'gins to bite the spirits. I do beseech you"
      },
      {
        "lineNumber": 135,
        "text": "That are of suppler joints, follow them swiftly"
      },
      {
        "lineNumber": 136,
        "text": "And hinder them from what this ecstasy"
      },
      {
        "lineNumber": 137,
        "text": "May now provoke them to."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 138,
        "text": "Follow, I pray you."
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 139,
        "text": "====="
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Alonso, Sebastian, Antonio, Gonzalo, Adrian"
  },
  {
    "position": 1,
    "text": "rancisco, etc."
  },
  {
    "position": 3,
    "text": "NTONIO, [aside to Sebastian"
  },
  {
    "position": 7,
    "text": "Solemn and strange music, and enter Prospero on th"
  },
  {
    "position": 7,
    "text": "op invisible."
  },
  {
    "position": 9,
    "text": "Enter several strange shapes, bringing in a banquet, an"
  },
  {
    "position": 9,
    "text": "ance about it with gentle actions of salutations."
  },
  {
    "position": 16,
    "text": "Inviting the King, etc., to eat, the shapes depart."
  },
  {
    "position": 21,
    "text": "Alonso, Sebastian, and Antoni"
  },
  {
    "position": 21,
    "text": "ove toward the table."
  },
  {
    "position": 21,
    "text": "Thunder and lightning. Enter Ariel, like a Harpy, clap"
  },
  {
    "position": 22,
    "text": "anquet vanishes."
  },
  {
    "position": 22,
    "text": "RIEL [as Harpy"
  },
  {
    "position": 23,
    "text": "Alonso, Sebastian, and Antonio draw their swords."
  },
  {
    "position": 24,
    "text": "nd a clear life ensuing.\t[He vanishes in thunder."
  },
  {
    "position": 24,
    "text": "Then, to soft music, enter the shapes again, and dance"
  },
  {
    "position": 24,
    "text": "ith mocks and mows, and carrying out the table."
  },
  {
    "position": 24,
    "text": "ROSPERO, [aside"
  },
  {
    "position": 25,
    "text": "nd his and mine loved darling.\t[He exits, above."
  },
  {
    "position": 25,
    "text": "ONZALO, [to Alonso"
  },
  {
    "position": 27,
    "text": "nd with him there lie mudded.\t[He exits."
  },
  {
    "position": 29,
    "text": "They exit."
  },
  {
    "position": 31,
    "text": "They all exit."
  }
],
  autoInsights: {}
};

const the_tempest_4_1: SceneData = {
  playTitle: 'The Tempest',
  act: 4,
  scene: 1,
  speeches: [
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "ADRIAN",
    "lines": [
      {
        "lineNumber": 2,
        "text": "If I have too austerely punished you,"
      },
      {
        "lineNumber": 3,
        "text": "Your compensation makes amends, for I"
      },
      {
        "lineNumber": 4,
        "text": "Have given you here a third of mine own life,"
      },
      {
        "lineNumber": 5,
        "text": "Or that for which I live; who once again"
      },
      {
        "lineNumber": 6,
        "text": "I tender to thy hand. All thy vexations"
      },
      {
        "lineNumber": 7,
        "text": "Were but my trials of thy love, and thou"
      },
      {
        "lineNumber": 8,
        "text": "Hast strangely stood the test. Here afore heaven"
      },
      {
        "lineNumber": 9,
        "text": "I ratify this my rich gift. O Ferdinand,"
      },
      {
        "lineNumber": 10,
        "text": "Do not smile at me that I boast of her,"
      },
      {
        "lineNumber": 11,
        "text": "For thou shalt find she will outstrip all praise"
      },
      {
        "lineNumber": 12,
        "text": "And make it halt behind her."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 13,
        "text": "I do believe it"
      },
      {
        "lineNumber": 14,
        "text": "Against an oracle."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 15,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 16,
        "text": "Then, as my gift and thine own acquisition"
      },
      {
        "lineNumber": 17,
        "text": "Worthily purchased, take my daughter. But"
      },
      {
        "lineNumber": 18,
        "text": "If thou dost break her virgin-knot before"
      },
      {
        "lineNumber": 19,
        "text": "All sanctimonious ceremonies may"
      },
      {
        "lineNumber": 20,
        "text": "With full and holy rite be ministered,"
      },
      {
        "lineNumber": 21,
        "text": "No sweet aspersion shall the heavens let fall"
      },
      {
        "lineNumber": 22,
        "text": "To make this contract grow; but barren hate,"
      },
      {
        "lineNumber": 23,
        "text": "Sour-eyed disdain, and discord shall bestrew"
      },
      {
        "lineNumber": 24,
        "text": "The union of your bed with weeds so loathly"
      },
      {
        "lineNumber": 25,
        "text": "That you shall hate it both. Therefore take heed,"
      },
      {
        "lineNumber": 26,
        "text": "As Hymen's lamps shall light you."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 27,
        "text": "As I hope"
      },
      {
        "lineNumber": 28,
        "text": "For quiet days, fair issue, and long life,"
      },
      {
        "lineNumber": 29,
        "text": "With such love as 'tis now, the murkiest den,"
      },
      {
        "lineNumber": 30,
        "text": "The most opportune place, the strong'st suggestion"
      },
      {
        "lineNumber": 31,
        "text": "Our worser genius can shall never melt"
      },
      {
        "lineNumber": 32,
        "text": "Mine honor into lust to take away"
      },
      {
        "lineNumber": 33,
        "text": "The edge of that day's celebration"
      },
      {
        "lineNumber": 34,
        "text": "When I shall think or Phoebus' steeds are foundered"
      },
      {
        "lineNumber": 35,
        "text": "Or night kept chained below."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 36,
        "text": "Fairly spoke."
      },
      {
        "lineNumber": 37,
        "text": "Sit then and talk with her. She is thine own."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 38,
        "text": "What, Ariel, my industrious servant, Ariel!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 39,
        "text": "ARIEL"
      },
      {
        "lineNumber": 40,
        "text": "What would my potent master? Here I am."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 41,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 42,
        "text": "Thou and thy meaner fellows your last service"
      },
      {
        "lineNumber": 43,
        "text": "Did worthily perform, and I must use you"
      },
      {
        "lineNumber": 44,
        "text": "In such another trick. Go bring the rabble,"
      },
      {
        "lineNumber": 45,
        "text": "O'er whom I give thee power, here to this place."
      },
      {
        "lineNumber": 46,
        "text": "Incite them to quick motion, for I must"
      },
      {
        "lineNumber": 47,
        "text": "Bestow upon the eyes of this young couple"
      },
      {
        "lineNumber": 48,
        "text": "Some vanity of mine art. It is my promise,"
      },
      {
        "lineNumber": 49,
        "text": "And they expect it from me."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 50,
        "text": "Presently?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 51,
        "text": "Ay, with a twink."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 52,
        "text": "ARIEL"
      },
      {
        "lineNumber": 53,
        "text": "Before you can say \"Come\" and \"Go,\""
      },
      {
        "lineNumber": 54,
        "text": "And breathe twice, and cry \"So, so,\""
      },
      {
        "lineNumber": 55,
        "text": "Each one, tripping on his toe,"
      },
      {
        "lineNumber": 56,
        "text": "Will be here with mop and mow."
      },
      {
        "lineNumber": 57,
        "text": "Do you love me, master? No?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 58,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 59,
        "text": "Dearly, my delicate Ariel. Do not approach"
      },
      {
        "lineNumber": 60,
        "text": "Till thou dost hear me call."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 61,
        "text": "Well; I conceive."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 62,
        "text": "Look thou be true; do not give dalliance"
      },
      {
        "lineNumber": 63,
        "text": "Too much the rein. The strongest oaths are straw"
      },
      {
        "lineNumber": 64,
        "text": "To th' fire i' th' blood. Be more abstemious,"
      },
      {
        "lineNumber": 65,
        "text": "Or else goodnight your vow."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 66,
        "text": "I warrant you, sir,"
      },
      {
        "lineNumber": 67,
        "text": "The white cold virgin snow upon my heart"
      },
      {
        "lineNumber": 68,
        "text": "Abates the ardor of my liver."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 69,
        "text": "Well.--"
      },
      {
        "lineNumber": 70,
        "text": "Now come, my Ariel. Bring a corollary"
      },
      {
        "lineNumber": 71,
        "text": "Rather than want a spirit. Appear, and pertly."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 72,
        "text": "No tongue. All eyes. Be silent."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 73,
        "text": "IRIS"
      },
      {
        "lineNumber": 74,
        "text": "Ceres, most bounteous lady, thy rich leas"
      },
      {
        "lineNumber": 75,
        "text": "Of wheat, rye, barley, vetches, oats, and peas;"
      },
      {
        "lineNumber": 76,
        "text": "Thy turfy mountains, where live nibbling sheep,"
      },
      {
        "lineNumber": 77,
        "text": "And flat meads thatched with stover, them to keep;"
      },
      {
        "lineNumber": 78,
        "text": "Thy banks with pioned and twilled brims,"
      },
      {
        "lineNumber": 79,
        "text": "Which spongy April at thy hest betrims"
      },
      {
        "lineNumber": 80,
        "text": "To make cold nymphs chaste crowns; and thy"
      },
      {
        "lineNumber": 81,
        "text": "broom groves,"
      },
      {
        "lineNumber": 82,
        "text": "Whose shadow the dismissed bachelor loves,"
      },
      {
        "lineNumber": 83,
        "text": "Being lass-lorn; thy poll-clipped vineyard,"
      },
      {
        "lineNumber": 84,
        "text": "And thy sea marge, sterile and rocky hard,"
      },
      {
        "lineNumber": 85,
        "text": "Where thou thyself dost air--the Queen o' th' sky,"
      },
      {
        "lineNumber": 86,
        "text": "Whose wat'ry arch and messenger am I,"
      },
      {
        "lineNumber": 87,
        "text": "Bids thee leave these, and with her sovereign grace,"
      },
      {
        "lineNumber": 88,
        "text": "Here on this grass-plot, in this very place,"
      },
      {
        "lineNumber": 89,
        "text": "To come and sport. Her peacocks fly amain."
      },
      {
        "lineNumber": 90,
        "text": "Approach, rich Ceres, her to entertain."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 91,
        "text": "CERES"
      },
      {
        "lineNumber": 92,
        "text": "Hail, many-colored messenger, that ne'er"
      },
      {
        "lineNumber": 93,
        "text": "Dost disobey the wife of Jupiter;"
      },
      {
        "lineNumber": 94,
        "text": "Who with thy saffron wings upon my flowers"
      },
      {
        "lineNumber": 95,
        "text": "Diffusest honey drops, refreshing showers;"
      },
      {
        "lineNumber": 96,
        "text": "And with each end of thy blue bow dost crown"
      },
      {
        "lineNumber": 97,
        "text": "My bosky acres and my unshrubbed down,"
      },
      {
        "lineNumber": 98,
        "text": "Rich scarf to my proud Earth. Why hath thy queen"
      },
      {
        "lineNumber": 99,
        "text": "Summoned me hither to this short-grassed green?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 100,
        "text": "IRIS"
      },
      {
        "lineNumber": 101,
        "text": "A contract of true love to celebrate,"
      },
      {
        "lineNumber": 102,
        "text": "And some donation freely to estate"
      },
      {
        "lineNumber": 103,
        "text": "On the blest lovers."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 104,
        "text": "Tell me, heavenly bow,"
      },
      {
        "lineNumber": 105,
        "text": "If Venus or her son, as thou dost know,"
      },
      {
        "lineNumber": 106,
        "text": "Do now attend the Queen? Since they did plot"
      },
      {
        "lineNumber": 107,
        "text": "The means that dusky Dis my daughter got,"
      },
      {
        "lineNumber": 108,
        "text": "Her and her blind boy's scandaled company"
      },
      {
        "lineNumber": 109,
        "text": "I have forsworn."
      }
    ]
  },
  {
    "speaker": "IRIS",
    "lines": [
      {
        "lineNumber": 110,
        "text": "Of her society"
      },
      {
        "lineNumber": 111,
        "text": "Be not afraid. I met her deity"
      },
      {
        "lineNumber": 112,
        "text": "Cutting the clouds towards Paphos, and her son"
      },
      {
        "lineNumber": 113,
        "text": "Dove-drawn with her. Here thought they to have"
      },
      {
        "lineNumber": 114,
        "text": "done"
      },
      {
        "lineNumber": 115,
        "text": "Some wanton charm upon this man and maid,"
      },
      {
        "lineNumber": 116,
        "text": "Whose vows are that no bed-right shall be paid"
      },
      {
        "lineNumber": 117,
        "text": "Till Hymen's torch be lighted--but in vain."
      },
      {
        "lineNumber": 118,
        "text": "Mars's hot minion is returned again;"
      },
      {
        "lineNumber": 119,
        "text": "Her waspish-headed son has broke his arrows,"
      },
      {
        "lineNumber": 120,
        "text": "Swears he will shoot no more, but play with"
      },
      {
        "lineNumber": 121,
        "text": "sparrows,"
      },
      {
        "lineNumber": 122,
        "text": "And be a boy right out."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 123,
        "text": "Highest queen of state,"
      },
      {
        "lineNumber": 124,
        "text": "Great Juno, comes. I know her by her gait."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 125,
        "text": "JUNO"
      },
      {
        "lineNumber": 126,
        "text": "How does my bounteous sister? Go with me"
      },
      {
        "lineNumber": 127,
        "text": "To bless this twain, that they may prosperous be"
      },
      {
        "lineNumber": 128,
        "text": "And honored in their issue."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 129,
        "text": "JUNO"
      },
      {
        "lineNumber": 130,
        "text": "Honor, riches, marriage-blessing,"
      },
      {
        "lineNumber": 131,
        "text": "Long continuance and increasing,"
      },
      {
        "lineNumber": 132,
        "text": "Hourly joys be still upon you."
      },
      {
        "lineNumber": 133,
        "text": "Juno sings her blessings on you."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 134,
        "text": "CERES"
      },
      {
        "lineNumber": 135,
        "text": "Earth's increase, foison plenty,"
      },
      {
        "lineNumber": 136,
        "text": "Barns and garners never empty,"
      },
      {
        "lineNumber": 137,
        "text": "Vines with clust'ring bunches growing,"
      },
      {
        "lineNumber": 138,
        "text": "Plants with goodly burden bowing;"
      },
      {
        "lineNumber": 139,
        "text": "Spring come to you at the farthest"
      },
      {
        "lineNumber": 140,
        "text": "In the very end of harvest."
      },
      {
        "lineNumber": 141,
        "text": "Scarcity and want shall shun you."
      },
      {
        "lineNumber": 142,
        "text": "Ceres' blessing so is on you."
      }
    ]
  },
  {
    "speaker": "CERES",
    "lines": [
      {
        "lineNumber": 143,
        "text": "FERDINAND"
      },
      {
        "lineNumber": 144,
        "text": "This is a most majestic vision, and"
      },
      {
        "lineNumber": 145,
        "text": "Harmonious charmingly. May I be bold"
      },
      {
        "lineNumber": 146,
        "text": "To think these spirits?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 147,
        "text": "Spirits, which by mine art"
      },
      {
        "lineNumber": 148,
        "text": "I have from their confines called to enact"
      },
      {
        "lineNumber": 149,
        "text": "My present fancies."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 150,
        "text": "Let me live here ever."
      },
      {
        "lineNumber": 151,
        "text": "So rare a wondered father and a wise"
      },
      {
        "lineNumber": 152,
        "text": "Makes this place paradise."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 153,
        "text": "Sweet now, silence."
      },
      {
        "lineNumber": 154,
        "text": "Juno and Ceres whisper seriously."
      },
      {
        "lineNumber": 155,
        "text": "There's something else to do. Hush, and be mute,"
      },
      {
        "lineNumber": 156,
        "text": "Or else our spell is marred."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 157,
        "text": "IRIS"
      },
      {
        "lineNumber": 158,
        "text": "You nymphs, called naiads of the windring brooks,"
      },
      {
        "lineNumber": 159,
        "text": "With your sedged crowns and ever-harmless looks,"
      },
      {
        "lineNumber": 160,
        "text": "Leave your crisp channels and on this green land"
      },
      {
        "lineNumber": 161,
        "text": "Answer your summons, Juno does command."
      },
      {
        "lineNumber": 162,
        "text": "Come, temperate nymphs, and help to celebrate"
      },
      {
        "lineNumber": 163,
        "text": "A contract of true love. Be not too late."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 164,
        "text": "You sunburned sicklemen, of August weary,"
      },
      {
        "lineNumber": 165,
        "text": "Come hither from the furrow and be merry."
      },
      {
        "lineNumber": 166,
        "text": "Make holiday: your rye-straw hats put on,"
      },
      {
        "lineNumber": 167,
        "text": "And these fresh nymphs encounter every one"
      },
      {
        "lineNumber": 168,
        "text": "In country footing."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 169,
        "text": "the Nymphs in a graceful dance, towards the end"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 170,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 171,
        "text": "I had forgot that foul conspiracy"
      },
      {
        "lineNumber": 172,
        "text": "Of the beast Caliban and his confederates"
      },
      {
        "lineNumber": 173,
        "text": "Against my life. The minute of their plot"
      },
      {
        "lineNumber": 174,
        "text": "Is almost come.--Well done. Avoid. No more."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 175,
        "text": "This is strange. Your father's in some passion"
      },
      {
        "lineNumber": 176,
        "text": "That works him strongly."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 177,
        "text": "Never till this day"
      },
      {
        "lineNumber": 178,
        "text": "Saw I him touched with anger, so distempered."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 179,
        "text": "You do look, my son, in a moved sort,"
      },
      {
        "lineNumber": 180,
        "text": "As if you were dismayed. Be cheerful, sir."
      },
      {
        "lineNumber": 181,
        "text": "Our revels now are ended. These our actors,"
      },
      {
        "lineNumber": 182,
        "text": "As I foretold you, were all spirits and"
      },
      {
        "lineNumber": 183,
        "text": "Are melted into air, into thin air;"
      },
      {
        "lineNumber": 184,
        "text": "And like the baseless fabric of this vision,"
      },
      {
        "lineNumber": 185,
        "text": "The cloud-capped towers, the gorgeous palaces,"
      },
      {
        "lineNumber": 186,
        "text": "The solemn temples, the great globe itself,"
      },
      {
        "lineNumber": 187,
        "text": "Yea, all which it inherit, shall dissolve,"
      },
      {
        "lineNumber": 188,
        "text": "And, like this insubstantial pageant faded,"
      },
      {
        "lineNumber": 189,
        "text": "Leave not a rack behind. We are such stuff"
      },
      {
        "lineNumber": 190,
        "text": "As dreams are made on, and our little life"
      },
      {
        "lineNumber": 191,
        "text": "Is rounded with a sleep. Sir, I am vexed."
      },
      {
        "lineNumber": 192,
        "text": "Bear with my weakness. My old brain is troubled."
      },
      {
        "lineNumber": 193,
        "text": "Be not disturbed with my infirmity."
      },
      {
        "lineNumber": 194,
        "text": "If you be pleased, retire into my cell"
      },
      {
        "lineNumber": 195,
        "text": "And there repose. A turn or two I'll walk"
      },
      {
        "lineNumber": 196,
        "text": "To still my beating mind."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 197,
        "text": "FERDINAND/MIRANDA  We wish your peace."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 198,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 199,
        "text": "Come with a thought. I thank thee, Ariel. Come."
      }
    ]
  },
  {
    "speaker": "MIRANDA",
    "lines": [
      {
        "lineNumber": 200,
        "text": "ARIEL"
      },
      {
        "lineNumber": 201,
        "text": "Thy thoughts I cleave to. What's thy pleasure?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 202,
        "text": "Spirit,"
      },
      {
        "lineNumber": 203,
        "text": "We must prepare to meet with Caliban."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 204,
        "text": "ARIEL"
      },
      {
        "lineNumber": 205,
        "text": "Ay, my commander. When I presented Ceres,"
      },
      {
        "lineNumber": 206,
        "text": "I thought to have told thee of it, but I feared"
      },
      {
        "lineNumber": 207,
        "text": "Lest I might anger thee."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 208,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 209,
        "text": "Say again, where didst thou leave these varlets?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 210,
        "text": "ARIEL"
      },
      {
        "lineNumber": 211,
        "text": "I told you, sir, they were red-hot with drinking,"
      },
      {
        "lineNumber": 212,
        "text": "So full of valor that they smote the air"
      },
      {
        "lineNumber": 213,
        "text": "For breathing in their faces, beat the ground"
      },
      {
        "lineNumber": 214,
        "text": "For kissing of their feet; yet always bending"
      },
      {
        "lineNumber": 215,
        "text": "Towards their project. Then I beat my tabor,"
      },
      {
        "lineNumber": 216,
        "text": "At which, like unbacked colts, they pricked their"
      },
      {
        "lineNumber": 217,
        "text": "ears,"
      },
      {
        "lineNumber": 218,
        "text": "Advanced their eyelids, lifted up their noses"
      },
      {
        "lineNumber": 219,
        "text": "As they smelt music. So I charmed their ears"
      },
      {
        "lineNumber": 220,
        "text": "That, calf-like, they my lowing followed through"
      },
      {
        "lineNumber": 221,
        "text": "Toothed briers, sharp furzes, pricking gorse, and"
      },
      {
        "lineNumber": 222,
        "text": "thorns,"
      },
      {
        "lineNumber": 223,
        "text": "Which entered their frail shins. At last I left them"
      },
      {
        "lineNumber": 224,
        "text": "I' th' filthy-mantled pool beyond your cell,"
      },
      {
        "lineNumber": 225,
        "text": "There dancing up to th' chins, that the foul lake"
      },
      {
        "lineNumber": 226,
        "text": "O'erstunk their feet."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 227,
        "text": "This was well done, my bird."
      },
      {
        "lineNumber": 228,
        "text": "Thy shape invisible retain thou still."
      },
      {
        "lineNumber": 229,
        "text": "The trumpery in my house, go bring it hither"
      },
      {
        "lineNumber": 230,
        "text": "For stale to catch these thieves."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 231,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 232,
        "text": "A devil, a born devil, on whose nature"
      },
      {
        "lineNumber": 233,
        "text": "Nurture can never stick; on whom my pains,"
      },
      {
        "lineNumber": 234,
        "text": "Humanely taken, all, all lost, quite lost;"
      },
      {
        "lineNumber": 235,
        "text": "And as with age his body uglier grows,"
      },
      {
        "lineNumber": 236,
        "text": "So his mind cankers. I will plague them all"
      },
      {
        "lineNumber": 237,
        "text": "Even to roaring."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 238,
        "text": "Come, hang them on this line."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 239,
        "text": "Pray you, tread softly, that the blind mole"
      },
      {
        "lineNumber": 240,
        "text": "may not hear a footfall. We now are near his cell."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 241,
        "text": "Monster, your fairy, which you say is a"
      },
      {
        "lineNumber": 242,
        "text": "harmless fairy, has done little better than played the"
      },
      {
        "lineNumber": 243,
        "text": "jack with us."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 244,
        "text": "Monster, I do smell all horse piss, at which"
      },
      {
        "lineNumber": 245,
        "text": "my nose is in great indignation."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 246,
        "text": "So is mine.--Do you hear, monster. If I"
      },
      {
        "lineNumber": 247,
        "text": "should take a displeasure against you, look you--"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 248,
        "text": "Thou wert but a lost monster."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 249,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 250,
        "text": "Good my lord, give me thy favor still."
      },
      {
        "lineNumber": 251,
        "text": "Be patient, for the prize I'll bring thee to"
      },
      {
        "lineNumber": 252,
        "text": "Shall hoodwink this mischance. Therefore speak"
      },
      {
        "lineNumber": 253,
        "text": "softly."
      },
      {
        "lineNumber": 254,
        "text": "All's hushed as midnight yet."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 255,
        "text": "Ay, but to lose our bottles in the pool!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 256,
        "text": "There is not only disgrace and dishonor in"
      },
      {
        "lineNumber": 257,
        "text": "that, monster, but an infinite loss."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 258,
        "text": "That's more to me than my wetting. Yet this"
      },
      {
        "lineNumber": 259,
        "text": "is your harmless fairy, monster!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 260,
        "text": "I will fetch off my bottle, though I be o'er"
      },
      {
        "lineNumber": 261,
        "text": "ears for my labor."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 262,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 263,
        "text": "Prithee, my king, be quiet. Seest thou here,"
      },
      {
        "lineNumber": 264,
        "text": "This is the mouth o' th' cell. No noise, and enter."
      },
      {
        "lineNumber": 265,
        "text": "Do that good mischief which may make this island"
      },
      {
        "lineNumber": 266,
        "text": "Thine own forever, and I, thy Caliban,"
      },
      {
        "lineNumber": 267,
        "text": "For aye thy foot-licker."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 268,
        "text": "Give me thy hand. I do begin to have bloody"
      },
      {
        "lineNumber": 269,
        "text": "thoughts."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 270,
        "text": "TRINCULO, [seeing the apparel]  O King Stephano, O"
      },
      {
        "lineNumber": 271,
        "text": "peer, O worthy Stephano, look what a wardrobe"
      },
      {
        "lineNumber": 272,
        "text": "here is for thee!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 273,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 274,
        "text": "Let it alone, thou fool. It is but trash."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 275,
        "text": "Oho, monster, we know what belongs to a"
      },
      {
        "lineNumber": 276,
        "text": "frippery. [He puts on one of the gowns.] O King"
      },
      {
        "lineNumber": 277,
        "text": "Stephano!"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 278,
        "text": "Put off that gown, Trinculo. By this hand,"
      },
      {
        "lineNumber": 279,
        "text": "I'll have that gown."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 280,
        "text": "Thy Grace shall have it."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 281,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 282,
        "text": "The dropsy drown this fool! What do you mean"
      },
      {
        "lineNumber": 283,
        "text": "To dote thus on such luggage? Let 't alone,"
      },
      {
        "lineNumber": 284,
        "text": "And do the murder first. If he awake,"
      },
      {
        "lineNumber": 285,
        "text": "From toe to crown he'll fill our skins with pinches,"
      },
      {
        "lineNumber": 286,
        "text": "Make us strange stuff."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 287,
        "text": "Be you quiet, monster.--Mistress Line, is"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 288,
        "text": "Now is the jerkin under the line.--Now, jerkin, you"
      },
      {
        "lineNumber": 289,
        "text": "are like to lose your hair and prove a bald jerkin."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 290,
        "text": "Do, do. We steal by line and level, an 't like"
      },
      {
        "lineNumber": 291,
        "text": "your Grace."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 292,
        "text": "I thank thee for that jest. Here's a garment"
      },
      {
        "lineNumber": 293,
        "text": "for 't. Wit shall not go unrewarded while I am king"
      },
      {
        "lineNumber": 294,
        "text": "of this country. \"Steal by line and level\" is an excellent"
      },
      {
        "lineNumber": 295,
        "text": "pass of pate. There's another garment for 't."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 296,
        "text": "Monster, come, put some lime upon your"
      },
      {
        "lineNumber": 297,
        "text": "fingers, and away with the rest."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 298,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 299,
        "text": "I will have none on 't. We shall lose our time"
      },
      {
        "lineNumber": 300,
        "text": "And all be turned to barnacles or to apes"
      },
      {
        "lineNumber": 301,
        "text": "With foreheads villainous low."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 302,
        "text": "Monster, lay to your fingers. Help to bear"
      },
      {
        "lineNumber": 303,
        "text": "this away where my hogshead of wine is, or I'll turn"
      },
      {
        "lineNumber": 304,
        "text": "you out of my kingdom. Go to, carry this."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 305,
        "text": "And this."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 306,
        "text": "Ay, and this."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 307,
        "text": "Hey, Mountain, hey!"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 308,
        "text": "Silver! There it goes, Silver!"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 309,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 310,
        "text": "Fury, Fury! There, Tyrant, there! Hark, hark!"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 311,
        "text": "Go, charge my goblins that they grind their joints"
      },
      {
        "lineNumber": 312,
        "text": "With dry convulsions, shorten up their sinews"
      },
      {
        "lineNumber": 313,
        "text": "With aged cramps, and more pinch-spotted make"
      },
      {
        "lineNumber": 314,
        "text": "them"
      },
      {
        "lineNumber": 315,
        "text": "Than pard or cat o' mountain."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 316,
        "text": "Hark, they roar."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 317,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 318,
        "text": "Let them be hunted soundly. At this hour"
      },
      {
        "lineNumber": 319,
        "text": "Lies at my mercy all mine enemies."
      },
      {
        "lineNumber": 320,
        "text": "Shortly shall all my labors end, and thou"
      },
      {
        "lineNumber": 321,
        "text": "Shalt have the air at freedom. For a little"
      },
      {
        "lineNumber": 322,
        "text": "Follow and do me service."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 323,
        "text": "====="
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Prospero, Ferdinand, and Miranda."
  },
  {
    "position": 1,
    "text": "ROSPERO, [to Ferdinand"
  },
  {
    "position": 6,
    "text": "Ferdinand and Miranda move aside."
  },
  {
    "position": 7,
    "text": "Enter Ariel."
  },
  {
    "position": 14,
    "text": "He exits."
  },
  {
    "position": 14,
    "text": "ROSPERO, [to Ferdinand"
  },
  {
    "position": 17,
    "text": "Soft music."
  },
  {
    "position": 18,
    "text": "Enter Iris."
  },
  {
    "position": 19,
    "text": "Enter Ceres."
  },
  {
    "position": 23,
    "text": "Juno descends."
  },
  {
    "position": 25,
    "text": "They sing."
  },
  {
    "position": 30,
    "text": "Juno and Ceres whisper"
  },
  {
    "position": 30,
    "text": "nd send Iris on employment."
  },
  {
    "position": 32,
    "text": "Enter certain Nymphs."
  },
  {
    "position": 33,
    "text": "Enter certain Reapers, properly habited. They join wit"
  },
  {
    "position": 34,
    "text": "hereof Prospero starts suddenly and speaks."
  },
  {
    "position": 35,
    "text": "To a strange, hollow, and confused noise"
  },
  {
    "position": 35,
    "text": "he spirits heavily vanish."
  },
  {
    "position": 35,
    "text": "ERDINAND, [to Miranda"
  },
  {
    "position": 37,
    "text": "ROSPERO, [to Ferdinand"
  },
  {
    "position": 39,
    "text": "They exit."
  },
  {
    "position": 39,
    "text": "Enter Ariel."
  },
  {
    "position": 46,
    "text": "RIEL  I go, I go.\t[He exits."
  },
  {
    "position": 47,
    "text": "Enter Ariel, loaden with glistering apparel, etc."
  },
  {
    "position": 48,
    "text": "Enter Caliban, Stephano, and Trinculo, all wet, a"
  },
  {
    "position": 48,
    "text": "rospero and Ariel look on."
  },
  {
    "position": 67,
    "text": "ot this my jerkin?\t[He takes a jacket from the tree."
  },
  {
    "position": 75,
    "text": "A noise of hunters heard."
  },
  {
    "position": 75,
    "text": "Enter divers spirits in shape of dogs and hounds"
  },
  {
    "position": 75,
    "text": "unting them about, Prospero and Ariel setting them on."
  },
  {
    "position": 78,
    "text": "Caliban, Stephano, and Trinculo are driven off."
  },
  {
    "position": 81,
    "text": "They exit."
  }
],
  autoInsights: {}
};

const the_tempest_5_1: SceneData = {
  playTitle: 'The Tempest',
  act: 5,
  scene: 1,
  speeches: [
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 1,
        "text": "======="
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 2,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 3,
        "text": "Now does my project gather to a head."
      },
      {
        "lineNumber": 4,
        "text": "My charms crack not, my spirits obey, and time"
      },
      {
        "lineNumber": 5,
        "text": "Goes upright with his carriage.--How's the day?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 6,
        "text": "ARIEL"
      },
      {
        "lineNumber": 7,
        "text": "On the sixth hour, at which time, my lord,"
      },
      {
        "lineNumber": 8,
        "text": "You said our work should cease."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 9,
        "text": "I did say so"
      },
      {
        "lineNumber": 10,
        "text": "When first I raised the tempest. Say, my spirit,"
      },
      {
        "lineNumber": 11,
        "text": "How fares the King and 's followers?"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 12,
        "text": "Confined"
      },
      {
        "lineNumber": 13,
        "text": "together"
      },
      {
        "lineNumber": 14,
        "text": "In the same fashion as you gave in charge,"
      },
      {
        "lineNumber": 15,
        "text": "Just as you left them; all prisoners, sir,"
      },
      {
        "lineNumber": 16,
        "text": "In the line grove which weather-fends your cell."
      },
      {
        "lineNumber": 17,
        "text": "They cannot budge till your release. The King,"
      },
      {
        "lineNumber": 18,
        "text": "His brother, and yours abide all three distracted,"
      },
      {
        "lineNumber": 19,
        "text": "And the remainder mourning over them,"
      },
      {
        "lineNumber": 20,
        "text": "Brimful of sorrow and dismay; but chiefly"
      },
      {
        "lineNumber": 21,
        "text": "Him that you termed, sir, the good old Lord"
      },
      {
        "lineNumber": 22,
        "text": "Gonzalo."
      },
      {
        "lineNumber": 23,
        "text": "His tears runs down his beard like winter's drops"
      },
      {
        "lineNumber": 24,
        "text": "From eaves of reeds. Your charm so strongly works"
      },
      {
        "lineNumber": 25,
        "text": "'em"
      },
      {
        "lineNumber": 26,
        "text": "That if you now beheld them, your affections"
      },
      {
        "lineNumber": 27,
        "text": "Would become tender."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 28,
        "text": "Dost thou think so, spirit?"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 29,
        "text": "ARIEL"
      },
      {
        "lineNumber": 30,
        "text": "Mine would, sir, were I human."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 31,
        "text": "And mine shall."
      },
      {
        "lineNumber": 32,
        "text": "Hast thou, which art but air, a touch, a feeling"
      },
      {
        "lineNumber": 33,
        "text": "Of their afflictions, and shall not myself,"
      },
      {
        "lineNumber": 34,
        "text": "One of their kind, that relish all as sharply"
      },
      {
        "lineNumber": 35,
        "text": "Passion as they, be kindlier moved than thou art?"
      },
      {
        "lineNumber": 36,
        "text": "Though with their high wrongs I am struck to th'"
      },
      {
        "lineNumber": 37,
        "text": "quick,"
      },
      {
        "lineNumber": 38,
        "text": "Yet with my nobler reason 'gainst my fury"
      },
      {
        "lineNumber": 39,
        "text": "Do I take part. The rarer action is"
      },
      {
        "lineNumber": 40,
        "text": "In virtue than in vengeance. They being penitent,"
      },
      {
        "lineNumber": 41,
        "text": "The sole drift of my purpose doth extend"
      },
      {
        "lineNumber": 42,
        "text": "Not a frown further. Go, release them, Ariel."
      },
      {
        "lineNumber": 43,
        "text": "My charms I'll break, their senses I'll restore,"
      },
      {
        "lineNumber": 44,
        "text": "And they shall be themselves."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 45,
        "text": "I'll fetch them, sir."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 46,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 47,
        "text": "You elves of hills, brooks, standing lakes, and groves,"
      },
      {
        "lineNumber": 48,
        "text": "And you that on the sands with printless foot"
      },
      {
        "lineNumber": 49,
        "text": "Do chase the ebbing Neptune, and do fly him"
      },
      {
        "lineNumber": 50,
        "text": "When he comes back; you demi-puppets that"
      },
      {
        "lineNumber": 51,
        "text": "By moonshine do the green sour ringlets make,"
      },
      {
        "lineNumber": 52,
        "text": "Whereof the ewe not bites; and you whose pastime"
      },
      {
        "lineNumber": 53,
        "text": "Is to make midnight mushrumps, that rejoice"
      },
      {
        "lineNumber": 54,
        "text": "To hear the solemn curfew; by whose aid,"
      },
      {
        "lineNumber": 55,
        "text": "Weak masters though you be, I have bedimmed"
      },
      {
        "lineNumber": 56,
        "text": "The noontide sun, called forth the mutinous winds,"
      },
      {
        "lineNumber": 57,
        "text": "And 'twixt the green sea and the azured vault"
      },
      {
        "lineNumber": 58,
        "text": "Set roaring war; to the dread rattling thunder"
      },
      {
        "lineNumber": 59,
        "text": "Have I given fire, and rifted Jove's stout oak"
      },
      {
        "lineNumber": 60,
        "text": "With his own bolt; the strong-based promontory"
      },
      {
        "lineNumber": 61,
        "text": "Have I made shake, and by the spurs plucked up"
      },
      {
        "lineNumber": 62,
        "text": "The pine and cedar; graves at my command"
      },
      {
        "lineNumber": 63,
        "text": "Have waked their sleepers, oped, and let 'em forth"
      },
      {
        "lineNumber": 64,
        "text": "By my so potent art. But this rough magic"
      },
      {
        "lineNumber": 65,
        "text": "I here abjure, and when I have required"
      },
      {
        "lineNumber": 66,
        "text": "Some heavenly music, which even now I do,"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 67,
        "text": "To work mine end upon their senses that"
      },
      {
        "lineNumber": 68,
        "text": "This airy charm is for, I'll break my staff,"
      },
      {
        "lineNumber": 69,
        "text": "Bury it certain fathoms in the earth,"
      },
      {
        "lineNumber": 70,
        "text": "And deeper than did ever plummet sound"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 71,
        "text": "gesture, attended by Gonzalo; Sebastian and Antonio in"
      },
      {
        "lineNumber": 72,
        "text": "like manner attended by Adrian and Francisco. They all"
      },
      {
        "lineNumber": 73,
        "text": "enter the circle which Prospero had made, and there"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 74,
        "text": "A solemn air, and the best comforter"
      },
      {
        "lineNumber": 75,
        "text": "To an unsettled fancy, cure thy brains,"
      },
      {
        "lineNumber": 76,
        "text": "Now useless, boiled within thy skull. There stand,"
      },
      {
        "lineNumber": 77,
        "text": "For you are spell-stopped.--"
      },
      {
        "lineNumber": 78,
        "text": "Holy Gonzalo, honorable man,"
      },
      {
        "lineNumber": 79,
        "text": "Mine eyes, e'en sociable to the show of thine,"
      },
      {
        "lineNumber": 80,
        "text": "Fall fellowly drops.--The charm dissolves apace,"
      },
      {
        "lineNumber": 81,
        "text": "And as the morning steals upon the night,"
      },
      {
        "lineNumber": 82,
        "text": "Melting the darkness, so their rising senses"
      },
      {
        "lineNumber": 83,
        "text": "Begin to chase the ignorant fumes that mantle"
      },
      {
        "lineNumber": 84,
        "text": "Their clearer reason.--O good Gonzalo,"
      },
      {
        "lineNumber": 85,
        "text": "My true preserver and a loyal sir"
      },
      {
        "lineNumber": 86,
        "text": "To him thou follow'st, I will pay thy graces"
      },
      {
        "lineNumber": 87,
        "text": "Home, both in word and deed.--Most cruelly"
      },
      {
        "lineNumber": 88,
        "text": "Didst thou, Alonso, use me and my daughter."
      },
      {
        "lineNumber": 89,
        "text": "Thy brother was a furtherer in the act.--"
      },
      {
        "lineNumber": 90,
        "text": "Thou art pinched for 't now, Sebastian.--Flesh and"
      },
      {
        "lineNumber": 91,
        "text": "blood,"
      },
      {
        "lineNumber": 92,
        "text": "You, brother mine, that entertained ambition,"
      },
      {
        "lineNumber": 93,
        "text": "Expelled remorse and nature, whom, with Sebastian,"
      },
      {
        "lineNumber": 94,
        "text": "Whose inward pinches therefore are most strong,"
      },
      {
        "lineNumber": 95,
        "text": "Would here have killed your king, I do forgive thee,"
      },
      {
        "lineNumber": 96,
        "text": "Unnatural though thou art.--Their understanding"
      },
      {
        "lineNumber": 97,
        "text": "Begins to swell, and the approaching tide"
      },
      {
        "lineNumber": 98,
        "text": "Will shortly fill the reasonable shore"
      },
      {
        "lineNumber": 99,
        "text": "That now lies foul and muddy. Not one of them"
      },
      {
        "lineNumber": 100,
        "text": "That yet looks on me or would know me.--Ariel,"
      },
      {
        "lineNumber": 101,
        "text": "Fetch me the hat and rapier in my cell."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 102,
        "text": "I will discase me and myself present"
      },
      {
        "lineNumber": 103,
        "text": "As I was sometime Milan.--Quickly, spirit,"
      },
      {
        "lineNumber": 104,
        "text": "Thou shalt ere long be free."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 105,
        "text": "Where the bee sucks, there suck I."
      },
      {
        "lineNumber": 106,
        "text": "In a cowslip's bell I lie."
      },
      {
        "lineNumber": 107,
        "text": "There I couch when owls do cry."
      },
      {
        "lineNumber": 108,
        "text": "On the bat's back I do fly"
      },
      {
        "lineNumber": 109,
        "text": "After summer merrily."
      },
      {
        "lineNumber": 110,
        "text": "Merrily, merrily shall I live now"
      },
      {
        "lineNumber": 111,
        "text": "Under the blossom that hangs on the bow."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 112,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 113,
        "text": "Why, that's my dainty Ariel. I shall miss"
      },
      {
        "lineNumber": 114,
        "text": "Thee, but yet thou shalt have freedom. So, so, so."
      },
      {
        "lineNumber": 115,
        "text": "To the King's ship, invisible as thou art."
      },
      {
        "lineNumber": 116,
        "text": "There shalt thou find the mariners asleep"
      },
      {
        "lineNumber": 117,
        "text": "Under the hatches. The master and the boatswain"
      },
      {
        "lineNumber": 118,
        "text": "Being awake, enforce them to this place,"
      },
      {
        "lineNumber": 119,
        "text": "And presently, I prithee."
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 120,
        "text": "ARIEL"
      },
      {
        "lineNumber": 121,
        "text": "I drink the air before me, and return"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 122,
        "text": "GONZALO"
      },
      {
        "lineNumber": 123,
        "text": "All torment, trouble, wonder, and amazement"
      },
      {
        "lineNumber": 124,
        "text": "Inhabits here. Some heavenly power guide us"
      },
      {
        "lineNumber": 125,
        "text": "Out of this fearful country!"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 126,
        "text": "PROSPERO, [to Alonso]  Behold, sir king,"
      },
      {
        "lineNumber": 127,
        "text": "The wronged Duke of Milan, Prospero."
      },
      {
        "lineNumber": 128,
        "text": "For more assurance that a living prince"
      },
      {
        "lineNumber": 129,
        "text": "Does now speak to thee, I embrace thy body,"
      }
    ]
  },
  {
    "speaker": "ARIEL",
    "lines": [
      {
        "lineNumber": 130,
        "text": "And to thee and thy company I bid"
      },
      {
        "lineNumber": 131,
        "text": "A hearty welcome."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 132,
        "text": "Whe'er thou be'st he or no,"
      },
      {
        "lineNumber": 133,
        "text": "Or some enchanted trifle to abuse me"
      },
      {
        "lineNumber": 134,
        "text": "(As late I have been) I not know. Thy pulse"
      },
      {
        "lineNumber": 135,
        "text": "Beats as of flesh and blood; and since I saw thee,"
      },
      {
        "lineNumber": 136,
        "text": "Th' affliction of my mind amends, with which"
      },
      {
        "lineNumber": 137,
        "text": "I fear a madness held me. This must crave,"
      },
      {
        "lineNumber": 138,
        "text": "An if this be at all, a most strange story."
      },
      {
        "lineNumber": 139,
        "text": "Thy dukedom I resign, and do entreat"
      },
      {
        "lineNumber": 140,
        "text": "Thou pardon me my wrongs. But how should"
      },
      {
        "lineNumber": 141,
        "text": "Prospero"
      },
      {
        "lineNumber": 142,
        "text": "Be living and be here?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 143,
        "text": "PROSPERO, [to Gonzalo]  First, noble friend,"
      },
      {
        "lineNumber": 144,
        "text": "Let me embrace thine age, whose honor cannot"
      },
      {
        "lineNumber": 145,
        "text": "Be measured or confined."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 146,
        "text": "Whether this be"
      },
      {
        "lineNumber": 147,
        "text": "Or be not, I'll not swear."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 148,
        "text": "You do yet taste"
      },
      {
        "lineNumber": 149,
        "text": "Some subtleties o' th' isle, that will not let you"
      },
      {
        "lineNumber": 150,
        "text": "Believe things certain. Welcome, my friends all."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 151,
        "text": "of lords, were I so minded,"
      },
      {
        "lineNumber": 152,
        "text": "I here could pluck his Highness' frown upon you"
      },
      {
        "lineNumber": 153,
        "text": "And justify you traitors. At this time"
      },
      {
        "lineNumber": 154,
        "text": "I will tell no tales."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 155,
        "text": "SEBASTIAN, [aside]  The devil speaks in him."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 156,
        "text": "PROSPERO, [aside to Sebastian]  No."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 157,
        "text": "call brother"
      },
      {
        "lineNumber": 158,
        "text": "Would even infect my mouth, I do forgive"
      },
      {
        "lineNumber": 159,
        "text": "Thy rankest fault, all of them, and require"
      },
      {
        "lineNumber": 160,
        "text": "My dukedom of thee, which perforce I know"
      },
      {
        "lineNumber": 161,
        "text": "Thou must restore."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 162,
        "text": "If thou be'st Prospero,"
      },
      {
        "lineNumber": 163,
        "text": "Give us particulars of thy preservation,"
      },
      {
        "lineNumber": 164,
        "text": "How thou hast met us here, whom three hours since"
      },
      {
        "lineNumber": 165,
        "text": "Were wracked upon this shore, where I have lost--"
      },
      {
        "lineNumber": 166,
        "text": "How sharp the point of this remembrance is!--"
      },
      {
        "lineNumber": 167,
        "text": "My dear son Ferdinand."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 168,
        "text": "I am woe for 't, sir."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 169,
        "text": "ALONSO"
      },
      {
        "lineNumber": 170,
        "text": "Irreparable is the loss, and patience"
      },
      {
        "lineNumber": 171,
        "text": "Says it is past her cure."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 172,
        "text": "I rather think"
      },
      {
        "lineNumber": 173,
        "text": "You have not sought her help, of whose soft grace,"
      },
      {
        "lineNumber": 174,
        "text": "For the like loss, I have her sovereign aid"
      },
      {
        "lineNumber": 175,
        "text": "And rest myself content."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 176,
        "text": "You the like loss?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 177,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 178,
        "text": "As great to me as late, and supportable"
      },
      {
        "lineNumber": 179,
        "text": "To make the dear loss have I means much weaker"
      },
      {
        "lineNumber": 180,
        "text": "Than you may call to comfort you, for I"
      },
      {
        "lineNumber": 181,
        "text": "Have lost my daughter."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 182,
        "text": "A daughter?"
      },
      {
        "lineNumber": 183,
        "text": "O heavens, that they were living both in Naples,"
      },
      {
        "lineNumber": 184,
        "text": "The King and Queen there! That they were, I wish"
      },
      {
        "lineNumber": 185,
        "text": "Myself were mudded in that oozy bed"
      },
      {
        "lineNumber": 186,
        "text": "Where my son lies!--When did you lose your"
      },
      {
        "lineNumber": 187,
        "text": "daughter?"
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 188,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 189,
        "text": "In this last tempest. I perceive these lords"
      },
      {
        "lineNumber": 190,
        "text": "At this encounter do so much admire"
      },
      {
        "lineNumber": 191,
        "text": "That they devour their reason, and scarce think"
      },
      {
        "lineNumber": 192,
        "text": "Their eyes do offices of truth, their words"
      },
      {
        "lineNumber": 193,
        "text": "Are natural breath.--But howsoe'er you have"
      },
      {
        "lineNumber": 194,
        "text": "Been justled from your senses, know for certain"
      },
      {
        "lineNumber": 195,
        "text": "That I am Prospero and that very duke"
      },
      {
        "lineNumber": 196,
        "text": "Which was thrust forth of Milan, who most"
      },
      {
        "lineNumber": 197,
        "text": "strangely"
      },
      {
        "lineNumber": 198,
        "text": "Upon this shore, where you were wracked, was"
      },
      {
        "lineNumber": 199,
        "text": "landed"
      },
      {
        "lineNumber": 200,
        "text": "To be the lord on 't. No more yet of this."
      },
      {
        "lineNumber": 201,
        "text": "For 'tis a chronicle of day by day,"
      },
      {
        "lineNumber": 202,
        "text": "Not a relation for a breakfast, nor"
      },
      {
        "lineNumber": 203,
        "text": "Befitting this first meeting. [To Alonso.] Welcome, sir."
      },
      {
        "lineNumber": 204,
        "text": "This cell's my court. Here have I few attendants,"
      },
      {
        "lineNumber": 205,
        "text": "And subjects none abroad. Pray you, look in."
      },
      {
        "lineNumber": 206,
        "text": "My dukedom since you have given me again,"
      },
      {
        "lineNumber": 207,
        "text": "I will requite you with as good a thing,"
      },
      {
        "lineNumber": 208,
        "text": "At least bring forth a wonder to content you"
      },
      {
        "lineNumber": 209,
        "text": "As much as me my dukedom."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 210,
        "text": "Sweet lord, you play me false."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 211,
        "text": "No, my dearest love,"
      },
      {
        "lineNumber": 212,
        "text": "I would not for the world."
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 213,
        "text": "MIRANDA"
      },
      {
        "lineNumber": 214,
        "text": "Yes, for a score of kingdoms you should wrangle,"
      },
      {
        "lineNumber": 215,
        "text": "And I would call it fair play."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 216,
        "text": "If this prove"
      },
      {
        "lineNumber": 217,
        "text": "A vision of the island, one dear son"
      },
      {
        "lineNumber": 218,
        "text": "Shall I twice lose."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 219,
        "text": "A most high miracle!"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 220,
        "text": "Though the seas threaten, they are merciful."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 221,
        "text": "Now, all the"
      },
      {
        "lineNumber": 222,
        "text": "blessings"
      },
      {
        "lineNumber": 223,
        "text": "Of a glad father compass thee about!"
      },
      {
        "lineNumber": 224,
        "text": "Arise, and say how thou cam'st here."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 225,
        "text": "MIRANDA, [rising and coming forward]  O wonder!"
      },
      {
        "lineNumber": 226,
        "text": "How many goodly creatures are there here!"
      },
      {
        "lineNumber": 227,
        "text": "How beauteous mankind is! O, brave new world"
      },
      {
        "lineNumber": 228,
        "text": "That has such people in 't!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 229,
        "text": "'Tis new to thee."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 230,
        "text": "What is this maid with whom thou wast at play?"
      },
      {
        "lineNumber": 231,
        "text": "Your eld'st acquaintance cannot be three hours."
      },
      {
        "lineNumber": 232,
        "text": "Is she the goddess that hath severed us"
      },
      {
        "lineNumber": 233,
        "text": "And brought us thus together?"
      }
    ]
  },
  {
    "speaker": "FERDINAND",
    "lines": [
      {
        "lineNumber": 234,
        "text": "Sir, she is mortal,"
      },
      {
        "lineNumber": 235,
        "text": "But by immortal providence she's mine."
      },
      {
        "lineNumber": 236,
        "text": "I chose her when I could not ask my father"
      },
      {
        "lineNumber": 237,
        "text": "For his advice, nor thought I had one. She"
      },
      {
        "lineNumber": 238,
        "text": "Is daughter to this famous Duke of Milan,"
      },
      {
        "lineNumber": 239,
        "text": "Of whom so often I have heard renown,"
      },
      {
        "lineNumber": 240,
        "text": "But never saw before, of whom I have"
      },
      {
        "lineNumber": 241,
        "text": "Received a second life; and second father"
      },
      {
        "lineNumber": 242,
        "text": "This lady makes him to me."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 243,
        "text": "I am hers."
      },
      {
        "lineNumber": 244,
        "text": "But, O, how oddly will it sound that I"
      },
      {
        "lineNumber": 245,
        "text": "Must ask my child forgiveness!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 246,
        "text": "There, sir, stop."
      },
      {
        "lineNumber": 247,
        "text": "Let us not burden our remembrances with"
      },
      {
        "lineNumber": 248,
        "text": "A heaviness that's gone."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 249,
        "text": "I have inly wept"
      },
      {
        "lineNumber": 250,
        "text": "Or should have spoke ere this. Look down, you"
      },
      {
        "lineNumber": 251,
        "text": "gods,"
      },
      {
        "lineNumber": 252,
        "text": "And on this couple drop a blessed crown,"
      },
      {
        "lineNumber": 253,
        "text": "For it is you that have chalked forth the way"
      },
      {
        "lineNumber": 254,
        "text": "Which brought us hither."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 255,
        "text": "I say \"Amen,\" Gonzalo."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 256,
        "text": "GONZALO"
      },
      {
        "lineNumber": 257,
        "text": "Was Milan thrust from Milan, that his issue"
      },
      {
        "lineNumber": 258,
        "text": "Should become kings of Naples? O, rejoice"
      },
      {
        "lineNumber": 259,
        "text": "Beyond a common joy, and set it down"
      },
      {
        "lineNumber": 260,
        "text": "With gold on lasting pillars: in one voyage"
      },
      {
        "lineNumber": 261,
        "text": "Did Claribel her husband find at Tunis,"
      },
      {
        "lineNumber": 262,
        "text": "And Ferdinand, her brother, found a wife"
      },
      {
        "lineNumber": 263,
        "text": "Where he himself was lost; Prospero his dukedom"
      },
      {
        "lineNumber": 264,
        "text": "In a poor isle; and all of us ourselves"
      },
      {
        "lineNumber": 265,
        "text": "When no man was his own."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 266,
        "text": "ALONSO, [to Ferdinand and Miranda]  Give me your"
      },
      {
        "lineNumber": 267,
        "text": "hands."
      },
      {
        "lineNumber": 268,
        "text": "Let grief and sorrow still embrace his heart"
      },
      {
        "lineNumber": 269,
        "text": "That doth not wish you joy!"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 270,
        "text": "Be it so. Amen."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 271,
        "text": "O, look, sir, look, sir, here is more of us."
      },
      {
        "lineNumber": 272,
        "text": "I prophesied if a gallows were on land,"
      },
      {
        "lineNumber": 273,
        "text": "This fellow could not drown. Now, blasphemy,"
      },
      {
        "lineNumber": 274,
        "text": "That swear'st grace o'erboard, not an oath on"
      },
      {
        "lineNumber": 275,
        "text": "shore?"
      },
      {
        "lineNumber": 276,
        "text": "Hast thou no mouth by land? What is the news?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 277,
        "text": "BOATSWAIN"
      },
      {
        "lineNumber": 278,
        "text": "The best news is that we have safely found"
      },
      {
        "lineNumber": 279,
        "text": "Our king and company. The next: our ship,"
      },
      {
        "lineNumber": 280,
        "text": "Which, but three glasses since, we gave out split,"
      },
      {
        "lineNumber": 281,
        "text": "Is tight and yare and bravely rigged as when"
      },
      {
        "lineNumber": 282,
        "text": "We first put out to sea."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 283,
        "text": "ARIEL, [aside to Prospero]  Sir, all this service"
      },
      {
        "lineNumber": 284,
        "text": "Have I done since I went."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 285,
        "text": "PROSPERO, [aside to Ariel]  My tricksy spirit!"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 286,
        "text": "ALONSO"
      },
      {
        "lineNumber": 287,
        "text": "These are not natural events. They strengthen"
      },
      {
        "lineNumber": 288,
        "text": "From strange to stranger.--Say, how came you"
      },
      {
        "lineNumber": 289,
        "text": "hither?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 290,
        "text": "BOATSWAIN"
      },
      {
        "lineNumber": 291,
        "text": "If I did think, sir, I were well awake,"
      },
      {
        "lineNumber": 292,
        "text": "I'd strive to tell you. We were dead of sleep"
      },
      {
        "lineNumber": 293,
        "text": "And--how, we know not--all clapped under"
      },
      {
        "lineNumber": 294,
        "text": "hatches,"
      },
      {
        "lineNumber": 295,
        "text": "Where, but even now, with strange and several"
      },
      {
        "lineNumber": 296,
        "text": "noises"
      },
      {
        "lineNumber": 297,
        "text": "Of roaring, shrieking, howling, jingling chains,"
      },
      {
        "lineNumber": 298,
        "text": "And more diversity of sounds, all horrible,"
      },
      {
        "lineNumber": 299,
        "text": "We were awaked, straightway at liberty,"
      },
      {
        "lineNumber": 300,
        "text": "Where we, in all her trim, freshly beheld"
      },
      {
        "lineNumber": 301,
        "text": "Our royal, good, and gallant ship, our master"
      },
      {
        "lineNumber": 302,
        "text": "Cap'ring to eye her. On a trice, so please you,"
      },
      {
        "lineNumber": 303,
        "text": "Even in a dream were we divided from them"
      },
      {
        "lineNumber": 304,
        "text": "And were brought moping hither."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 305,
        "text": "ARIEL, [aside to Prospero]  Was 't well done?"
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 306,
        "text": "Bravely, my diligence. Thou shalt be free."
      }
    ]
  },
  {
    "speaker": "GONZALO",
    "lines": [
      {
        "lineNumber": 307,
        "text": "ALONSO"
      },
      {
        "lineNumber": 308,
        "text": "This is as strange a maze as e'er men trod,"
      },
      {
        "lineNumber": 309,
        "text": "And there is in this business more than nature"
      },
      {
        "lineNumber": 310,
        "text": "Was ever conduct of. Some oracle"
      },
      {
        "lineNumber": 311,
        "text": "Must rectify our knowledge."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 312,
        "text": "Sir, my liege,"
      },
      {
        "lineNumber": 313,
        "text": "Do not infest your mind with beating on"
      },
      {
        "lineNumber": 314,
        "text": "The strangeness of this business. At picked leisure,"
      },
      {
        "lineNumber": 315,
        "text": "Which shall be shortly, single I'll resolve you,"
      },
      {
        "lineNumber": 316,
        "text": "Which to you shall seem probable, of every"
      },
      {
        "lineNumber": 317,
        "text": "These happened accidents; till when, be cheerful"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 318,
        "text": "Come hither, spirit;"
      },
      {
        "lineNumber": 319,
        "text": "Set Caliban and his companions free."
      },
      {
        "lineNumber": 320,
        "text": "Untie the spell. [Ariel exits.] How fares my gracious"
      },
      {
        "lineNumber": 321,
        "text": "sir?"
      },
      {
        "lineNumber": 322,
        "text": "There are yet missing of your company"
      },
      {
        "lineNumber": 323,
        "text": "Some few odd lads that you remember not."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 324,
        "text": "Every man shift for all the rest, and let no"
      },
      {
        "lineNumber": 325,
        "text": "man take care for himself, for all is but fortune."
      },
      {
        "lineNumber": 326,
        "text": "Coraggio, bully monster, coraggio."
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 327,
        "text": "If these be true spies which I wear in my"
      },
      {
        "lineNumber": 328,
        "text": "head, here's a goodly sight."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 329,
        "text": "O Setebos, these be brave spirits indeed! How"
      },
      {
        "lineNumber": 330,
        "text": "fine my master is! I am afraid he will chastise me."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 331,
        "text": "Ha, ha!"
      },
      {
        "lineNumber": 332,
        "text": "What things are these, my Lord Antonio?"
      },
      {
        "lineNumber": 333,
        "text": "Will money buy 'em?"
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 334,
        "text": "Very like. One of them"
      },
      {
        "lineNumber": 335,
        "text": "Is a plain fish and no doubt marketable."
      }
    ]
  },
  {
    "speaker": "ANTONIO",
    "lines": [
      {
        "lineNumber": 336,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 337,
        "text": "Mark but the badges of these men, my lords,"
      },
      {
        "lineNumber": 338,
        "text": "Then say if they be true. This misshapen knave,"
      },
      {
        "lineNumber": 339,
        "text": "His mother was a witch, and one so strong"
      },
      {
        "lineNumber": 340,
        "text": "That could control the moon, make flows and ebbs,"
      },
      {
        "lineNumber": 341,
        "text": "And deal in her command without her power."
      },
      {
        "lineNumber": 342,
        "text": "These three have robbed me, and this demi-devil,"
      },
      {
        "lineNumber": 343,
        "text": "For he's a bastard one, had plotted with them"
      },
      {
        "lineNumber": 344,
        "text": "To take my life. Two of these fellows you"
      },
      {
        "lineNumber": 345,
        "text": "Must know and own. This thing of darkness I"
      },
      {
        "lineNumber": 346,
        "text": "Acknowledge mine."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 347,
        "text": "I shall be pinched to death."
      }
    ]
  },
  {
    "speaker": "CALIBAN",
    "lines": [
      {
        "lineNumber": 348,
        "text": "ALONSO"
      },
      {
        "lineNumber": 349,
        "text": "Is not this Stephano, my drunken butler?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 350,
        "text": "He is drunk now. Where had he wine?"
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 351,
        "text": "ALONSO"
      },
      {
        "lineNumber": 352,
        "text": "And Trinculo is reeling ripe. Where should they"
      },
      {
        "lineNumber": 353,
        "text": "Find this grand liquor that hath gilded 'em?"
      }
    ]
  },
  {
    "speaker": "TRINCULO",
    "lines": [
      {
        "lineNumber": 354,
        "text": "I have been in such a pickle since I saw you"
      },
      {
        "lineNumber": 355,
        "text": "last that I fear me will never out of my bones. I"
      },
      {
        "lineNumber": 356,
        "text": "shall not fear flyblowing."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 357,
        "text": "Why, how now, Stephano?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 358,
        "text": "O, touch me not! I am not Stephano, but a"
      },
      {
        "lineNumber": 359,
        "text": "cramp."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 360,
        "text": "You'd be king o' the isle, sirrah?"
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 361,
        "text": "I should have been a sore one, then."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 362,
        "text": "This is as strange a thing as e'er I looked on."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 363,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 364,
        "text": "He is as disproportioned in his manners"
      },
      {
        "lineNumber": 365,
        "text": "As in his shape. [To Caliban.] Go, sirrah, to my cell."
      },
      {
        "lineNumber": 366,
        "text": "Take with you your companions. As you look"
      },
      {
        "lineNumber": 367,
        "text": "To have my pardon, trim it handsomely."
      }
    ]
  },
  {
    "speaker": "STEPHANO",
    "lines": [
      {
        "lineNumber": 368,
        "text": "CALIBAN"
      },
      {
        "lineNumber": 369,
        "text": "Ay, that I will, and I'll be wise hereafter"
      },
      {
        "lineNumber": 370,
        "text": "And seek for grace. What a thrice-double ass"
      },
      {
        "lineNumber": 371,
        "text": "Was I to take this drunkard for a god,"
      },
      {
        "lineNumber": 372,
        "text": "And worship this dull fool!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 373,
        "text": "Go to, away!"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 374,
        "text": "Hence, and bestow your luggage where you found it."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 375,
        "text": "Or stole it, rather."
      }
    ]
  },
  {
    "speaker": "SEBASTIAN",
    "lines": [
      {
        "lineNumber": 376,
        "text": "PROSPERO"
      },
      {
        "lineNumber": 377,
        "text": "Sir, I invite your Highness and your train"
      },
      {
        "lineNumber": 378,
        "text": "To my poor cell, where you shall take your rest"
      },
      {
        "lineNumber": 379,
        "text": "For this one night, which part of it I'll waste"
      },
      {
        "lineNumber": 380,
        "text": "With such discourse as, I not doubt, shall make it"
      },
      {
        "lineNumber": 381,
        "text": "Go quick away: the story of my life"
      },
      {
        "lineNumber": 382,
        "text": "And the particular accidents gone by"
      },
      {
        "lineNumber": 383,
        "text": "Since I came to this isle. And in the morn"
      },
      {
        "lineNumber": 384,
        "text": "I'll bring you to your ship, and so to Naples,"
      },
      {
        "lineNumber": 385,
        "text": "Where I have hope to see the nuptial"
      },
      {
        "lineNumber": 386,
        "text": "Of these our dear-beloved solemnized,"
      },
      {
        "lineNumber": 387,
        "text": "And thence retire me to my Milan, where"
      },
      {
        "lineNumber": 388,
        "text": "Every third thought shall be my grave."
      }
    ]
  },
  {
    "speaker": "ALONSO",
    "lines": [
      {
        "lineNumber": 389,
        "text": "I long"
      },
      {
        "lineNumber": 390,
        "text": "To hear the story of your life, which must"
      },
      {
        "lineNumber": 391,
        "text": "Take the ear strangely."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 392,
        "text": "I'll deliver all,"
      },
      {
        "lineNumber": 393,
        "text": "And promise you calm seas, auspicious gales,"
      },
      {
        "lineNumber": 394,
        "text": "And sail so expeditious that shall catch"
      },
      {
        "lineNumber": 395,
        "text": "Your royal fleet far off. [Aside to Ariel.] My Ariel,"
      },
      {
        "lineNumber": 396,
        "text": "chick,"
      },
      {
        "lineNumber": 397,
        "text": "That is thy charge. Then to the elements"
      },
      {
        "lineNumber": 398,
        "text": "Be free, and fare thou well.--Please you, draw near."
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 399,
        "text": "EPILOGUE,"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 400,
        "text": "============================"
      }
    ]
  },
  {
    "speaker": "PROSPERO",
    "lines": [
      {
        "lineNumber": 401,
        "text": "Now my charms are all o'erthrown,"
      },
      {
        "lineNumber": 402,
        "text": "And what strength I have 's mine own,"
      },
      {
        "lineNumber": 403,
        "text": "Which is most faint. Now 'tis true"
      },
      {
        "lineNumber": 404,
        "text": "I must be here confined by you,"
      },
      {
        "lineNumber": 405,
        "text": "Or sent to Naples. Let me not,"
      },
      {
        "lineNumber": 406,
        "text": "Since I have my dukedom got"
      },
      {
        "lineNumber": 407,
        "text": "And pardoned the deceiver, dwell"
      },
      {
        "lineNumber": 408,
        "text": "In this bare island by your spell,"
      },
      {
        "lineNumber": 409,
        "text": "But release me from my bands"
      },
      {
        "lineNumber": 410,
        "text": "With the help of your good hands."
      },
      {
        "lineNumber": 411,
        "text": "Gentle breath of yours my sails"
      },
      {
        "lineNumber": 412,
        "text": "Must fill, or else my project fails,"
      },
      {
        "lineNumber": 413,
        "text": "Which was to please. Now I want"
      },
      {
        "lineNumber": 414,
        "text": "Spirits to enforce, art to enchant,"
      },
      {
        "lineNumber": 415,
        "text": "And my ending is despair,"
      },
      {
        "lineNumber": 416,
        "text": "Unless I be relieved by prayer,"
      },
      {
        "lineNumber": 417,
        "text": "Which pierces so that it assaults"
      },
      {
        "lineNumber": 418,
        "text": "Mercy itself, and frees all faults."
      },
      {
        "lineNumber": 419,
        "text": "As you from crimes would pardoned be,"
      },
      {
        "lineNumber": 420,
        "text": "Let your indulgence set me free."
      }
    ]
  }
],
  stageDirections: [
  {
    "position": 1,
    "text": "Enter Prospero in his magic robes, and Ariel."
  },
  {
    "position": 9,
    "text": "He exits."
  },
  {
    "position": 9,
    "text": "Prospero draws a large circle on the stage with his staff."
  },
  {
    "position": 10,
    "text": "Prospero gestures with his staff."
  },
  {
    "position": 11,
    "text": "'ll drown my book.\t[Solemn music."
  },
  {
    "position": 11,
    "text": "Here enters Ariel before; then Alonso with a franti"
  },
  {
    "position": 12,
    "text": "tand charmed; which Prospero observing, speaks."
  },
  {
    "position": 13,
    "text": "Ariel exits and at once return"
  },
  {
    "position": 13,
    "text": "ith Prospero's ducal robes."
  },
  {
    "position": 14,
    "text": "RIEL [sings, and helps to attire him."
  },
  {
    "position": 17,
    "text": "r ere your pulse twice beat.\t[He exits."
  },
  {
    "position": 19,
    "text": "He embraces Alonso."
  },
  {
    "position": 24,
    "text": "Aside to Sebastian and Antonio.] But you, my brac"
  },
  {
    "position": 27,
    "text": "To Antonio.] For you, most wicked sir, whom t"
  },
  {
    "position": 36,
    "text": "Here Prospero discovers Ferdinand and Miranda"
  },
  {
    "position": 36,
    "text": "laying at chess."
  },
  {
    "position": 36,
    "text": "IRANDA, [to Ferdinand"
  },
  {
    "position": 41,
    "text": "ERDINAND, [seeing Alonso and coming forward"
  },
  {
    "position": 42,
    "text": " have cursed them without cause.\t[He kneels."
  },
  {
    "position": 43,
    "text": "Ferdinand stands."
  },
  {
    "position": 45,
    "text": "LONSO, [to Ferdinand"
  },
  {
    "position": 54,
    "text": "Enter Ariel, with the Master and Boatswai"
  },
  {
    "position": 54,
    "text": "mazedly following."
  },
  {
    "position": 61,
    "text": "ROSPERO, [aside to Ariel"
  },
  {
    "position": 64,
    "text": "nd think of each thing well. [Aside to Ariel."
  },
  {
    "position": 65,
    "text": "Enter Ariel, driving in Caliban, Stephano, and Trincul"
  },
  {
    "position": 65,
    "text": "n their stolen apparel."
  },
  {
    "position": 75,
    "text": "To Trinculo.] How cam'st thou in this pickle"
  },
  {
    "position": 80,
    "text": "LONSO, [indicating Caliban"
  },
  {
    "position": 84,
    "text": "LONSO, [to Stephano and Trinculo"
  },
  {
    "position": 86,
    "text": "Caliban, Stephano, and Trinculo exit."
  },
  {
    "position": 89,
    "text": "They all exit."
  },
  {
    "position": 90,
    "text": "spoken by Prospero."
  },
  {
    "position": 92,
    "text": "He exits."
  }
],
  autoInsights: {}
};

export const scenes: { [key: string]: SceneData } = {
  'the_tempest_1_1': the_tempest_1_1,
  'the_tempest_1_2': the_tempest_1_2,
  'the_tempest_2_1': the_tempest_2_1,
  'the_tempest_2_2': the_tempest_2_2,
  'the_tempest_3_1': the_tempest_3_1,
  'the_tempest_3_2': the_tempest_3_2,
  'the_tempest_3_3': the_tempest_3_3,
  'the_tempest_4_1': the_tempest_4_1,
  'the_tempest_5_1': the_tempest_5_1,
};

export const getScene = (playId: string, act: number, scene: number): SceneData | null => {
  // Normalize playId: convert hyphens to underscores to match our keys
  const normalizedPlayId = playId.replace(/-/g, '_');
  const key = `${normalizedPlayId}_${act}_${scene}`;
  return scenes[key] || null;
};
