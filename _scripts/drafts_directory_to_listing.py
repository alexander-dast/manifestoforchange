from pathlib import Path
import yaml
with open("_quarto.yml") as file:
    directories = (yaml.safe_load(file)['script-config']['draft-directories'])

drafts = []
for each in directories:
    drafts += (list(map(str, (Path(each).glob('*.*')))))

with open("_drafts.yml", "w") as file:
    yaml.safe_dump({"website": {"drafts": drafts}}, file)
