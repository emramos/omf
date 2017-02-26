module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: "./frontend/app/css",
            src: ["**"],
            dest: "./frontend/dist/css"
          },
          {
            expand: true,
            cwd: "./frontend/app/html",
            src: ["**"],
            dest: "./frontend/dist/html"
          }
        ]
      }
    },
    ts: {
      fe: {
        files: [
        {
          src: ["frontend/app/\*\*/\*.ts", "!frontend/app/.baseDir.ts"],
          dest: "frontend/dist"
        },
      ],
        options: {
          "target": "es5",
          "module": "commonjs",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": false,
          "noImplicitAny": false,
          "fast": 'never'
        }
      },
      be: {
        files: [
        {
          src: ["backend/src/\*\*/\*.ts", "!backend/src/.baseDir.ts"],
          dest: "backend/dist"
        }
      ],
        options: {
          "target": "es5",
          "module": "commonjs",
          "moduleResolution": "node",
          "sourceMap": true,
          "emitDecoratorMetadata": true,
          "experimentalDecorators": true,
          "removeComments": false,
          "noImplicitAny": false,
          "fast": 'never'
        }
      }
    },
    watch: {
      ts: {
        files: ["./frontend/app/**/*.ts", "./backend/src/**/*.ts"],
        tasks: ["ts"]
      },
      views: {
        files: ["./frontend/app/**/*.html", "frontend/app/**/*.css"],
        tasks: ["copy"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-ts");

  grunt.registerTask("default", [
    "copy",
    "ts"
  ]);

};
