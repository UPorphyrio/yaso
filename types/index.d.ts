namespace yaso {
  enum YasoErrorCode {
    "E001" = 0x0001,
    "E002",
    "E003",
    "E004",
    "E005",
    "E006",
    "E007",
    "E008",
    "E009",
    "E010",
    "E011",
    "E012",
    "E013",
    "E014",
    "E015",
    "E016",
    "E017",
    "E018",
    "E019",
    "E020",
    "E021",
    "E022",
    "E023",
    "E024",
    "E025",
    "E026",
    "E027",
    "E028",
    "E029",
    "E030",
    "E031",
    "E032",
    "E033",
    "E034",
    "E035",
    "E036",
    "E037",
    "E038",
    "E039",
    "E040",
    "E041",
    "E042",
    "E043",
    "E044",
    "E045",
    "E046",
    "E047",
    "E048",
    "E049",
    "E050",
  }
  interface YasoError extends Error{
      code:YasoErrorCode;
  }
}
