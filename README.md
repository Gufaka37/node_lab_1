## Node-Lab_1 (Task 8)

### Downloading and installing NPM modules

```
$ cd node_lab_1
```

```
$ npm i
```

### (optional) Installing the application as an NPM module

```
$ [sudo] npm i -g ./
```

### Usage example:

CLI tool accept 3 options:

1. -i, --input: an input file
2. -o, --output: an output file
3. -a, --action: an action string/array

Operation with string input.txt to output.txt:

```
$ [node] app -i input.txt -o output.txt -a string
```

Operation with array input.txt to output.txt:

```
$ [node] app --input input.txt --output output.txt --action array
```

Operation with string stdin to stdout with shift 7:

```
$ [node] app --action string
```

### NPM scripts

Operation with string input.txt to output.txt:

```
$ npm run string
```

Operation with array input.txt to output.txt:

```
$ npm run array
```