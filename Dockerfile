FROM oven/bun:1 AS build

WORKDIR /src

COPY bun.lockb .
COPY package.json .

RUN bun install --frozen-lockfile

COPY src ./src

# compile everything to a binary called cli which includes the bun runtime
RUN bun build ./src/index.ts --compile --outfile cli

FROM ubuntu:22.04

WORKDIR /src

# copy the compiled binary from the build image
COPY --from=build /src/cli /src/cli

EXPOSE 3000
# execute the binary!
CMD ["/src/cli"]